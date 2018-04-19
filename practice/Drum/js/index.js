function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) 
    return //音檔播完就停止
    
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