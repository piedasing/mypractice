var vm = new Vue({
  el: "#app",
  data: {
    message: "hello world!",
    vbind: "123456",
    isActive: true,
    vmodel: "123456",
    vif: true,
    vfor: [
      {item: "123"},
      {item: "456"}
    ],
    vtext: "<h4>v-text</h4>",
    vhtml: "<h4>v-text</h4>",
    i: 0
  },
  methods: {
    von1: function(){
      alert("按鈕1被按下了")
    },
    von2: function(){
      alert("按鈕2被按下了")
    },
    add: function(){
      this.i++
    }
  },
  computed: {
    num: function(){
      if(this.i <= 5){
        return "加油"
      }
      else if(this.i <= 10){
        return "加油再用力點"
      }
      else{
        return "好厲害呀~~"
      }
    }
  },
  watch: {
    i: function(newValue,oldValue){
      console.log(newValue,oldValue)      
    }
  }
})