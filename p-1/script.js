//  var iStatus = document.querySelector("h5")

//   var btn = document.querySelector(".add")
   
// var flag = 0

//   btn.addEventListener("click",function(){
//     if(flag == 0){
//  iStatus.innerHTML = "Friends"
//     iStatus.style.color = "green"
//     btn.innerHTML = "Remove Friend"
//     flag = 1
//     }
//    else{
//     iStatus.innerHTML = "Stranger"
//     iStatus.style.color = "red"
//     btn.innerHTML = "Add Friend"
//     flag = 0
//    }
//   })

 var iStatus = document.querySelector("h5")
 var btn = document.querySelector(".add")
 flag = 0

 btn.addEventListener("click", function(){
    if(flag == 0){
  iStatus.innerHTML = "Freined"
    iStatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
flag = 1
    }
    else{
         iStatus.innerHTML = "Stranger"
    iStatus.style.color = "red"
    btn.innerHTML = "Add Friend"
    flag = 0
    }
  
 })