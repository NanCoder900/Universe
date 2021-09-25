// some global variables
const dropContent = document.getElementById("drop-content");
const dropBtn = document.getElementById("drop-btn");
const nav = document.querySelector("nav");
const scrollIcon = document.querySelector(".scroll");
const logo = document.querySelector(".logo");
const restPart = document.querySelector(".restpart");
// ---x--- //

// some navigation settings
function openNav() {
   dropContent.style.transform = "translateY(0)";
}

function closeNav() {
   dropContent.style.transform = "translateY(-100%)";
}

setInterval(() => {
   if (window.scrollY === 0) {
      nav.style.background = "none";
      logo.style.color = "#050505";

   } else {
      nav.style.background = "#000000af";
      logo.style.color = "#f5f5f5";
   }
}, 1);

// ---x--- //

// arrow button settings
setInterval(() => {
   if (window.scrollY === 0) {
      scrollIcon.style.display = "none";
   } else {
      scrollIcon.style.display = "block";
   }
}, 1);
// ---x--- //

// Some RestPart's scrolling effect
setInterval(() => {
   if (window.scrollY > 500) {
   restPart.style.backgroundColor = "#000";
   restPart.style.color = "#fff";
}

   else {
   restPart.style.background = ""; //This will show the element with the normal bgcolor
   restPart.style.color = ""; //This will show the element with the normal font-color
   }
}, 1);

// Some Settings for the Contact btn
function msg() {
   alert('Message sent....');
}
