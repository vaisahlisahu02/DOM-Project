 var btn = document.querySelector("button")
  var growth = document.querySelector("h1")
  var progress = document.querySelector(".bar")
  var num = 0

  btn.addEventListener("click",function(){
   
    var int = setInterval(() => {
        num++
        growth.innerHTML = num+"%"
        progress.style.width = num+"%"
    }, 50);
    setTimeout(() => {
        clearInterval(int)
         growth.innerHTML = num+"%"
        progress.style.width = num+"%"
        btn.innerHTML = "Downloded"
    }, 5000);
  })