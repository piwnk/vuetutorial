new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function () {
            alert('Alerted!')
        },
        saveInputValue: function (event) {
            this.value = event.target.value
        }
    }
});