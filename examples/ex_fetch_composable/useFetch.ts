import { ref } from "vue";

export function useFetch<T = unknown>(url: string) {
  const loading = ref(false);
  const error = ref<unknown>(null);
  const data = ref<T | null>(null);

  async function run() {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data.value = (await res.json()) as T;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  return { loading, error, data, run };
}
