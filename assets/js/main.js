
/* Mobile nav */

var navBtn = document.getElementById("nav-mobile");
navBtn.addEventListener("click", openMenu);

function openMenu() {
    var menu = document.getElementById("navbar");
    menu.classList.toggle("open");
    navBtn.classList.toggle("cross");
}

var nav = document.getElementById("main-navigation");
document.addEventListener("scroll", function(){
  var scroll = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll > 2) {
    nav.classList.add("nav-fixed");
  }else {
    nav.classList.remove("nav-fixed");
  }
});

/* Search form */
var searchBtn = document.getElementById("search_button");
searchBtn.addEventListener("click", function() {
  var searchForm = document.getElementById("search_form");
  searchForm.classList.toggle("open");
  var iconSearch = this.getElementsByTagName('span')[0];
  iconSearch.classList.toggle('icon-cross');
});

/* Tabs features section */

var btn = document.getElementsByClassName("btn-item");
var content = document.getElementsByClassName("content-item");

btn[0].classList.add('btn-item-yellow');
content[0].classList.add('active');

for (var i = 0; i < btn.length; i++) {
  btn[i].dataset.i = i;
  btn[i].addEventListener("click", function(){
    for (var b of btn) {
      b.classList.remove("btn-item-yellow");
    }
    for (var c of content) {
      c.classList.remove("active");
    }
    btn[this.dataset.i].classList.add('btn-item-yellow');
    content[this.dataset.i].classList.add('active');
  }, 0);
}
