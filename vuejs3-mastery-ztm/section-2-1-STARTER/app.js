const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: ' ',
      lastName: 'Doe',
      raw_url: "https://www.google.com",
      age: 20
    };
  },
  methods: {
    
    increment(){
        this.age++
    },
    updateLastName(msg, event) {
        // console.log(msg)
        this.lastName = event.target.value
    },
    updateMiddleName(event) {
        this.middleName = event.target.value
    },
    computed: {
        fullName() {
            console.log("Full name computed property was called!")
            return `${ this.firstName } ${this.middleName } ${this.lastName.toUpperCase()}`
    },
    watch: {
        age(newVal, oldVal){
            setTimeout(() => {
                this.age = 20
            }, 3000)
        }
    }
    }
    

  }
}).mount('#app');

setTimeout(() => {
  vm.firstName = 'Bob';
}, 2000);
