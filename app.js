var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right ="-250px"

menubtn.onclick = function(){
    if(sideNav.style.right == "-75vh" ){
        sideNav.style.right = "0";
        menu.src = "./images/close.png";
}
    else{
        sideNav.style.right = "-75vh";
        menu.src = "./images/menu.png";
}
}

let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
