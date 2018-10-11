var nav = document.querySelector("nav");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
window.onscroll = function() {
  myFunction();
};
var scrollTarget = {
  "connect-with-us": document.querySelector(".connect-with-us"),
  map: document.querySelector("section.map")
};
document
  .querySelectorAll("a")
  .forEach(a => a.addEventListener("click", prevent));

function prevent(e) {
  e.preventDefault();
}

function scrollInView(e) {
  scrollTarget[e.target.getAttribute("target")].scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
document
  .querySelectorAll(".scroll-nav")
  .forEach(a => a.addEventListener("click", scrollInView));

// var a = document.querySelector(".deactive>a");

// document.querySelector(".deactive").addEventListener("click", function() {
//   a.classList.remove("deactive");
//   a.classList.add("active");
// });

window.addEventListener("scroll", function(e) {
  var connectTop = scrollTarget["connect-with-us"].getBoundingClientRect().top;
  if (connectTop < window.innerHeight / 2 && connectTop > 10) {
    document.querySelector(".contact-us").classList.add("active");
  } else {
    document.querySelector(".contact-us").classList.remove("active");
  }
  var globalTop = scrollTarget["map"].getBoundingClientRect().top;
  if (globalTop < window.innerHeight / 2 && globalTop > 10) {
    document.querySelector(".global").classList.add("active");
  } else {
    document.querySelector(".global").classList.remove("active");
  }
});
