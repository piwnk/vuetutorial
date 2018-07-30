new Vue({
  el: '#exercise',
  data: {
    value: 0,
  },
  computed: {
    result: function (value) {
      return this.value < 37 ? 'not there yet' : 'done';
    },
  },
  watch: {
    result: function () {
      const vm = this;
      setTimeout(function () {
        vm.value = 0;
      }, 5000)
    }
  }
});