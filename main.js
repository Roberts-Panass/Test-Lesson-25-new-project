let menu = document.querySelector(".fixed-menu");

menu.addEventListener("click", function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector(".active");

    if(clickTarget.classList.contains('nav-link')){
        clickTarget.classList.add("active");
        activeBtn.classList.remove("active");
    }
});

window.onscroll = function() {
    let h = document.documentElement.clientHeight;
};

window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*4 ) {
        classLink = '.comments-link';
    }
    else if (window.scrollY >= h*3 ) {
        classLink = '.works-link';
    }
    else if (window.scrollY >= h*2 ) {
        classLink = '.skills-link';
    }
    else if (window.scrollY >= h ) {
        classLink = '.about-link';
    }
    else {
        classLink = '.main-link';
    }
}

let activeBtn = document.querySelector(".active");
let newActiveBtn = document.querySelector(classLink);

if (!newActiveBtn.classList.contains("active")) {
    newActiveBtn.classList.add("active");
    activeBtn.classList.remove("active");
}

 let classLink = '.main-link';
window.onscroll = function() {
 let h = document.documentElement.clientHeight;
 if (window.scrollY >= h*4 ){
   classLink = '.comments-link';
 }
 else if (window.scrollY >= h*3){
   classLink = '.works-link';
 }
 else if (window.scrollY >= h*2 ){
   classLink = '.skills-link';
 }
 else if (window.scrollY >= h){
   classLink = '.about-link';
 }
 else{
   classLink = '.main-link';
 }
 let activeBtn = document.querySelector('.active');
 let newActiveBtn = document.querySelector(classLink);
 if (!newActiveBtn.classList.contains('active')){
   newActiveBtn.classList.add('active');
   activeBtn.classList.remove('active')
 }
};