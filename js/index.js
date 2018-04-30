cards = [
  {
    "title": "時鐘",
    "preview": "./practice/Clock/public/index.html"
  },
  {
    "title": "鍵盤爵士鼓",
    "preview": "./practice/Drum/public/index.html"
  },
  {
    "title": "輪播圖(bootstrap)",
    "preview": "./practice/Carousel_bs/public/index.html"
  },
  {
    "title": "輪播圖(Vue)",
    "preview": "./practice/Carousel_vue/public/index.html"
  },
  {
    "title": "Vue",
    "preview": "./practice/myVue/public/index.html"
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
  },
  methods: {
    //點擊continue按鈕後，顯示導覽列、產品、footer
    start(){
      $("#nav").css("display","block")
      $("#site").css("display","block")
      $("#footer").css("display","block")
      $("#home").css("display","none")
    },
    //點擊導覽列的首頁名稱，回到首頁，並把其他隱藏
    home(){
      $("#home").css("display","block")
      $("#nav").css("display","none")
      $("#site").css("display","none")
      $("#about").css("display","none")
      $("#practice").css("display","none")
      $("#footer").css("display","none")
    },
    //點擊導覽列項目，把其他不相關的區塊隱藏
    fn(i){
      $("#footer").css("display","block")
      $("#home").css("display","none")
      switch(i){
        case 0:
          $("#site").css("display","block")
          $("#about").css("display","none")
          $("#practice").css("display","none")
          break
        case 1:
          $("#site").css("display","none")
          $("#about").css("display","block")
          $("#practice").css("display","none")
          break
        case 2:
          $("#site").css("display","none")
          $("#about").css("display","none")
          $("#practice").css("display","block")
          break
      }
    },
    loading(){
      $('.cover').ready(function(){
        $('#main').css("display","block")
        $('#loading').hide(1500)
      })
    }
  }
})

//***************************************************//
//*******************functions***********************//
//***************************************************//
//載入首頁效果
$(window).on('ready',loading)
function loading(){
  $('.cover').ready(function(){
    $('#main').css("display","block")
    $('#loading').hide(1500)
  })
}

//***************************************************//
//***************************************************//
//***************************************************//
//螢幕小於5760px，點擊選單項目後會自動收合(再點一次按鈕)
$(function(){
  if($(window).width() < 576){
    $(".navbar a").on("click",function(){
      $(".navbar-toggler").click()
    })
  }
})