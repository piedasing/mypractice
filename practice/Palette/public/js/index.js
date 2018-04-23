cards = [
  {
    "colorname": "color_black",
    "color": "#000000",
    "bgcss": ""
  },
  {
    "colorname": "color_red",
    "color": "#ff0000",
    "bgcss": ""
  },
  {
    "colorname": "color_yellow",
    "color": "#ffff00",
    "bgcss": ""
  },
  {
    "colorname": "color_green",
    "color": "#00ff00",
    "bgcss": ""
  },
  {
    "colorname": "color_purple",
    "color": "#930093",
    "bgcss": ""
  },
  {
    "colorname": "color_gray",
    "color": "#aaaaaa",
    "bgcss": ""
  },
  {
    "colorname": "color_orange",
    "color": "#f75000",
    "bgcss": ""
  },
  {
    "colorname": "color_brown",
    "color": "#9f5000",
    "bgcss": ""
  },
  {
    "colorname": "color_sliver",
    "color": "#9d9d9d",
    "bgcss": ""
  },
  {
    "colorname": "color_gold",
    "color": "#ffd306",
    "bgcss": ""
  },
  {
    "colorname": "color_white",
    "color": "#ffffff",
    "bgcss": ""
  },
]

Vue.component('colorcard',{
  template: "#colorcard",
  props: ['card']
})

var vm = new Vue({
  el: "#app",
  data: {
    cards: cards
  },
  computed: {
    colorcards: function(){
      for(var i=0; i<cards.length ;i++){
        var name = cards[i].colorname
        var color = cards[i].color
        cards[i].bgcss = {
            "background-color":  cards[i].color
        }  
      }
      return cards
    }
  }
})