let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate(){
    console.log('beforeCreate() function called', this.message)
  }
})
vm.mount('#app')

// setTimeout(() => {
//     vm.mount('#app')
// }, 3000)