new Vue({
  el: '#app',
  data: {
    title: 'Hello world!',
    link: 'http://google.com',
    fullAnchor: `<a href="${this.link}">Google (fullAnchor not valid usecase of this)</a>`
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    sayHello: function () {
      return `${this.title} (regular function)`;
    },
    sayHelloArrow: () => `${this.title} (arrow function not valid usecase of this)`,
  }
}) 