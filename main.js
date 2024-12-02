console.log('Hello World!');



let menu = document.querySelector(".mobile-m-icon")

let slidebar = document.querySelector(".menu-bar")

menu.onclick = () =>{
  
 if (slidebar.style.transform == "translate(0%)") {
 
 slidebar.style.transform = "translate(100%)"
 
 
  } else {
slidebar.style.transform = "translate(0%)"
  }
  
  
  event.stopPropagation()

  
}



document.querySelector(".box").onclick = () =>{
  slidebar.style.transform = "translate(100%)"


  
}