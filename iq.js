// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

window.onload = function() {
    var canvas = document.getElementById('picassoCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = 200;
        canvas.height = 200;

        // Draw abstract shapes
        ctx.fillStyle = "#FFD700"; // Gold
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(200, 100);
        ctx.lineTo(100, 200);
        ctx.lineTo(0, 100);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#AFEEEE"; // PaleTurquoise
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2, true); // Circle
        ctx.fill();

        // Add some dynamic lines for visual interest
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 200);
        ctx.moveTo(200, 0);
        ctx.lineTo(0, 200);
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
    }
};

