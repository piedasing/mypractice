$('.btn').on('click',function(){
  $.post("https://raw.githubusercontent.com/piedasing/mypractice/master/test.json").then(function(res){
  var posts = JSON.parse(res)
  console.log(posts)
})
})
