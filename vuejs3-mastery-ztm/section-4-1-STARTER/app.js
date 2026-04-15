let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})

setTimeout(() => {
    vm.mount('#app')
}, 3000)