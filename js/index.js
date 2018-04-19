cards = [
  {
    "title": "輪播圖",
    "preview": "./practice/Carousel/index.html",
    "id": "p01"
  },
  {
    "title": "時鐘",
    "preview": "./practice/Clock/index.html",
    "id": "p02"
  },
  {
    "title": "調色盤",
    "preview": "./practice/Palette/index.html",
    "id": "p02"
  },
  {
    "title": "鍵盤爵士鼓",
    "preview": "./practice/Drum/index.html",
    "id": "p02"
  },
]

Vue.component("card",{
  template: "#card",
  props: ["card_data"]
})

var vm = new Vue({
  el: "#app",
  data: {
    cards: cards
  }
})