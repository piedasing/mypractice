function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  play(audio, key)
}
function clickplay(num){
  const audio = document.querySelector(`audio[data-key="${num}"]`)
  const key = document.querySelector(`.key[data-key="${num}"]`)
  play(audio, key)
}
function play(audio, key){
  if (!audio) 
    return
  audio.currentTime = 0 //該音檔從頭開始播
  audio.play()  //播放音檔
  //播放中 -> 加入 .playing
  key.classList.add('playing');
  //播完結束 -> 移除 .playing
  audio.addEventListener('ended',function(){
    key.classList.remove('playing')
  })
}
window.addEventListener('keydown', playSound)  //按下按鍵，觸發function
window.addEventListener('click',playSound)

