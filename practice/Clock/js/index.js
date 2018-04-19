var c = $("#mycanvas")[0]
var ctx = c.getContext("2d")
var ww = $(window).outerWidth()
var wh = $(window).outerHeight()

var center={
  x: ww/2,
  y: wh/2
}

function getWindowSize(){
  var ww = $(window).outerWidth()
  var wh = $(window).outerHeight()

  c.width = ww 
  c.height = wh
  
  ctx.restore()
  ctx.translate(center.x,center.y)
}
//文件讀取完成才抓螢幕大小
$(window).ready(function(){
  getWindowSize()
})
//畫面有變動，就重新整理畫面
$(window).resize(function(){
  window.location.reload();
})

var mytime = 0

function draw(){
  //清除背景
  ctx.fillStyle="#111"
  ctx.beginPath()
  ctx.rect(-2000,-2000,4000,4000)
  ctx.fill()
  
  //畫中心點
  ctx.beginPath()
  ctx.fillStyle="rgba(255,255,255,1)"
  ctx.arc(0,0,5,0,2*Math.PI);
  ctx.fill()
  
  //畫刻度
  ctx.beginPath()
  ctx.strokeStyle = "rgba(255,255,255,0.1)"
  
  var r = Math.min(ww/3,wh/3)
  var count = 60
  ctx.lineWidth = 1
  
  for(var i=0;i<count;i++){
    var deg = 360 * (i / count) * Math.PI * 2 / 360
    var offset = 10
    var len = 5 + ( i % 5 == 0 ? 10 : 0 ) //每5個刻度 + 10
    var start_r = r
    var end_r = r + offset + len
    ctx.beginPath()
    ctx.moveTo(
      start_r * Math.cos(deg),
      start_r * Math.sin(deg)
    )
    ctx.lineTo(
      end_r * Math.cos(deg),
      end_r * Math.sin(deg)
    )
    ctx.strokeStyle = "rgba(255,255,255,0.3)"
    ctx.stroke()
  }
  
  //畫時鐘
  var time = new Date()
  var sec = time.getSeconds()
  var min = time.getMinutes()
  var hour = time.getHours()
  if(sec <10) sec = "0" + sec
  if(min <10) min = "0" + min
  if(hour <10) hour = "0" + hour
  //顯示時間
  $(".time").text(hour +":"+min+":"+sec)
  
  function drawtime(r,deg,lineWidth){
    var r = r
    var deg = deg
    var now = deg * Math.PI * 2 / 360  //換算成弳度
    ctx.beginPath()
    ctx.strokeStyle = "rgba(255,255,255,0.6)"
    ctx.lineWidth = lineWidth
    ctx.moveTo(0,0)
    ctx.lineTo(r * Math.cos(now), r * Math.sin(now))
    ctx.stroke()
  }
  var sec_len = Math.min(ww/3,wh/3)
  var min_len = sec_len *0.8
  var hour_len = sec_len * 0.6
  drawtime(sec_len, -360 * sec / 60 + 90, 1)    //秒針
  drawtime(min_len, -360 * min / 60 + 90, 4)    //分針
  drawtime(hour_len, -360 * ((hour + min / 60) / 12) + 90, 8)    //時針
  
  mytime+=1
}
setInterval(draw,1000)