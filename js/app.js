const { createApp } = Vue

createApp({
    data() {
        return {
          count: 0,
          message: "ciao mondo"
        }
      },
      methods: {
        increment() {
          this.count++
        }
      },
}).mount("#app");
