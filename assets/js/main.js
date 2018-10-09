// var nav = document.querySelector(".navbar");
// var sticky = nav.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// }
// window.onscroll = function() {
//   myFunction();
// };

// var a = document.querySelector(".deactive>a");
// document.querySelector(".deactive").addEventListener("click", function() {
//   console.log("---------");
//   a.classList.remove("deactive");
//   a.classList.add("active");
// });

var header = document.querySelector(".prod-list-ul");
console.log("header = ", header);
var links = header.querySelector(".deactive > a");
console.log("links = ", links);
for (var i = 0; i < links.length; i++) {
  console.log("-----");
  links[i].addEventListener("click", function() {
    console.log("-----");
    var current = document.querySelector(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
