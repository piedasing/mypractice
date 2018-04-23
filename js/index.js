cards = [
  {
    "title": "輪播圖",
    "preview": "./practice/Carousel/public/index.html"
  },
  {
    "title": "時鐘",
    "preview": "./practice/Clock/public/index.html"
  },
  {
    "title": "調色盤",
    "preview": "./practice/Palette/public/index.html"
  },
  {
    "title": "鍵盤爵士鼓",
    "preview": "./practice/Drum/public/index.html"
  },
  {
    "title": "發票對獎機",
    "preview": "./practice/Invoice/public/index.html"
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