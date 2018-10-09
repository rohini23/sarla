document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

var header = document.querySelector(".prod-list-ul");
console.log("header = ", header);
var links = header.querySelector(".deactive > a");
console.log("links = ", links);
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.querySelector(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var current = document.querySelector(".prod-item.active");
window.addEventListener("keydown", function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if ([40, 38].includes(key)) e.preventDefault();
});
window.addEventListener("keyup", changeSelectedProduct);

document
  .querySelector(".prod-list-ul li:first-child")
  .addEventListener("click", function() {
    changeSelectedProduct({ keyCode: 38 });
  });

document
  .querySelector(".prod-list-ul li:last-child")
  .addEventListener("click", function() {
    changeSelectedProduct({ keyCode: 40 });
  });

function changeSelectedProduct(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if (key === 40) {
    var temp = current && current.nextElementSibling;
    if (!temp.classList.contains("prod-item")) return;
    if (temp.classList.contains("prod-item")) {
      current.classList.remove("active");
      current.classList.add("deactive");
      current = temp;
      current.classList.add("active");
      current.classList.remove("deactive");
      // current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  if (key === 38) {
    var temp = current && current.previousElementSibling;
    if (!temp.classList.contains("prod-item")) return;
    current.classList.remove("active");
    current.classList.add("deactive");
    current = temp;
    current.classList.add("active");
    current.classList.remove("deactive");
    // current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
document.body.onscroll = function() {
  var y = document.body.getBoundingClientRect().y;
  console.log("---", y);
  if (y < 30) {
    document.querySelector("html").classList.add("navbar-pt");
    document.querySelector(".navbar-brand").classList.add("navbar-mh");
    document.querySelector(".navbar").classList.add("navbar-mh");
    document.querySelector(".navbar-item").classList.add("navbar-item-p");
    document.querySelector(".navbar-burger").classList.add("navbar-burger-h");
  }
  if (y > 30) {
    document.querySelector("html").classList.remove("navbar-pt");
    document.querySelector(".navbar-brand").classList.remove("navbar-mh");
    document.querySelector(".navbar").classList.remove("navbar-mh");
    document.querySelector(".navbar-item").classList.remove("navbar-item-p");
    document
      .querySelector(".navbar-burger")
      .classList.remove("navbar-burger-h");
  }
};
