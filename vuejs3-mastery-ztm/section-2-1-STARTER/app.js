const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      raw_url: "https://www.google.com",
      age: 20
    };
  },
  methods: {
    fullName() {
        return `${ this.firstName } ${this.lastName.toUpperCase()}`
    },
    increment(){
        this.age++
    }
  }
}).mount('#app');

setTimeout(() => {
  vm.firstName = 'Bob';
}, 2000);
