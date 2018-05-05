var works =[
  {
    title : "marko-blazevic",
    description : "marko-blazevic",
    cover : "https://source.unsplash.com/Jc-HATlkbcA/800x600"
  },
  {
    title : "Lukasz Szmigiel",
    description : "Lukasz Szmigiel",
    cover : "https://source.unsplash.com/NeSykhHkyQw/800x600"
  },
  {
    title : "Karl Fredrickson",
    description : "Karl Fredrickson",
    cover : "https://source.unsplash.com/lJB94bk-ePI/800x600"
  }
];
var vm = new Vue({
  el: "#app",
  data: {
    now_index: 0 ,
    works: works,
    span: 1200
  },
  computed: {
    computed_left(){
      this.span = $(window).width()
      var span = this.span
      span = 3000
      console.log(span)
      var result = {
        "left":((-1)* this.now_index * span) + "px"
      };
      return result
    }
  },
  methods: {
   delta(d){
     this.now_index = 
       (this.now_index + d + this.works.length) % this.works.length 
   },
    bg_css(url){
      return {
        "background-image": "url(" + url +")"
      }
    }
  }
});