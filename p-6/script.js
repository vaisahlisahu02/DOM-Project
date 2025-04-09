 var btn = document.querySelector("button")
 var h1= document.querySelector("h1")
  var pro = document.querySelector('#progress')
var num = 0



 btn.addEventListener("click",function(){
    

   var int =  setInterval(() => {
      num++
    pro.style.width = num+"%"
    h1.innerHTML = num+'%'
    },50 );
    
    setTimeout(() => {
     clearInterval(int)

    pro.style.width = num+"%"
    h1.innerHTML = num+'%'
    btn.innerHTML = 'Downloaded'
     
    }, 5000);
 })