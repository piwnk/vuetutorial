new Vue({
  el: '#app',
  data: {
    computedCounter: 0,
    methodCounter: 0
  },
  computed: {
    result: function () {
      console.log('Computed')
      return this.computedCounter >= 5 ? 'Greater or equal 5' : 'Smaller than 5';
    }
  },
  methods: {
    increase: function () {
      console.log('Method')
      this.methodCounter++
    }
  }
})