/*function keyplay(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  play(audio,key)
}
*/
function play(audio,key){
  if (!audio) 
    return //按其他按鍵不要有反應
  audio.currentTime = 0 //該音檔從頭開始播
  audio.play()  //播放音檔
  //播放中 -> 加入 .playing
  key.classList.add('playing');
  //播完結束 -> 移除 .playing
  setTimeout(function(){
    key.classList.remove('playing')
  },300)
}

//window.addEventListener('keydown', keyplay)  //按下按鍵，觸發function
//window.addEventListener('click', clickplay)  //按下按鍵，觸發function
var vm = new Vue({
  el: "#app",
  data: {
    num: "",
    prize: "123"
  },
  methods: {
    clickplay: function(num) {
      if(num == "8"){
        this.num = this.num.substring(0, this.num.length-1)
      }
      else if(num == "9"){
        this.num = ""
      }
      else{
        this.num += String.fromCharCode(num)
      }
      if(this.num == this.prize){
        this.num += "中獎了"
      }
    },
    keyplay: function(num) {

    },
  }
})