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

<style scoped lang="scss">
@use 'sass:color';

p:hover {
  color: color.adjust(#cc4444, $lightness: -15%);
}
</style>
