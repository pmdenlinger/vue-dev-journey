<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'Hello world',
    };
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
