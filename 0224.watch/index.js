new Vue({
  el: '#app',
  data: {
    computedCounter: 0
  },
  computed: {
    result: function () {
      console.log('Computed')
      return this.computedCounter >= 5 ? 'Greater or equal 5' : 'Smaller than 5';
    }
  },
  watch: {
    computedCounter: function (value) {
      const vm = this;
      setTimeout(function () {
        vm.computedCounter = 0;
      }, 3000)
    }
  }
})