Vue.createApp({
    data() {
        return {
            perspective: 0,
            rotateX: 0,
            rotateY: 0, 
            rotateZ: 0
        }
    },
    computed: {
        box(){
            return {
                transform: `perspective(this.perspective(${this.perspective}px))`,
                rotateX: `rotateX(${this.rotateX}deg)`,
                rotateY: `rotateY(${this.rotateY}deg)`,
                rotateZ: `rotateZ(${this.rotateZ}deg)`
            }

        }
    }
}).mount("#app")