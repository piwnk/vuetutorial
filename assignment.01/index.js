new Vue({
  el: "#exercise",
  data: {
    name: 'Peter',
    age: 35,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0533/2089/files/vuejs-tutorial_2d2a853c-aa2f-44b0-80df-933b495f77f8.png?v=1509478492'
  },
  methods: {
    randomNumber: function () {
      return Math.random()
    }
  }
})