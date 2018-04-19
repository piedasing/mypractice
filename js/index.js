cards = [
  {
    "title": "輪播圖",
    "preview": "./practice/Carousel/public/index.html",
    "id": "p01"
  },
  {
    "title": "時鐘",
    "preview": "./practice/Clock/public/index.html",
    "id": "p02"
  },
  {
    "title": "調色盤",
    "preview": "./practice/Palette/public/index.html",
    "id": "p02"
  },
  {
    "title": "鍵盤爵士鼓",
    "preview": "./practice/Drum/public/index.html",
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