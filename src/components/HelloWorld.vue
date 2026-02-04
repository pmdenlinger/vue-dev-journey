<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{ msg: string }>();
const count = ref(0);
</script>

<template>
  <section>
    <p>{{ props.msg }}</p>
    <button @click="count++">
      Clicked {{ count }} times
    </button>
  </section>
</template>

<style scoped>
button{ padding:.5rem .75rem; }
</style>
