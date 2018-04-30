posts = [
  {
    "title": "marko-blazevic",
    "suvtitle": "",
    "url": "./img/marko-blazevic.jpg",
    "status": "active"
  },
  {
    "title": "paul-carmona",
    "suvtitle": "",
    "url": "./img/paul-carmona.jpg",
    "status": ""
  },
  {
    "title": "praveen-thotagamuwa",
    "suvtitle": "",
    "url": "./img/praveen-thotagamuwa.jpg",
    "status": ""
  }
]

Vue.component("post",{
  template: "#post",
  props: ["post_data"]
})

var vm = new Vue({
  el: "#app",
  data: {
    posts: posts
  }
})
