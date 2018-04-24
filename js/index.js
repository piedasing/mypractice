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
var content = "您好，我是陳韋呈，這是我的個人網站，主要是以 pug + sass 撰寫的，目前我已經學習網頁前端約半年左右。涵蓋範圍包括:\n"
content += "網頁3劍客: html、css、javascript -> 3個基礎網頁語法\n"
content += "排版框架 : bootstrap -> 用於快速排版及響應式設計\n"
content += "前端框架 : vue js\n"
content += "使用過 Wordpress 建置網站 -> 提供後台給管理者使用\n"
content += "目前正在學習: git -> 版本控制及託管"

Vue.component("card",{
  template: "#card",
  props: ["card_data"]
})

var vm = new Vue({
  el: "#app",
  data: {
    cards: cards,
    content: content
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