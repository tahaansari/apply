Vue.component('comp-button', {
    template: '<button v-on:click="increment">Click Me {{count}}</button>',
    data: function () {
        return {
          count: 0
        }
    },
    methods:{
        increment:function(){
            this.count++;
            this.$emit('increment');
        }
    }
})