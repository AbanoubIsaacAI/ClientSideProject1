let midp = document.querySelector(".middlespan");
let info = document.querySelector(".info");
let visdiv = document.querySelector(".visdiv");
let stickybar = document.querySelector(".stickybar");
let like = document.querySelectorAll(".fa-heart")[0];

let scrollTop = 0;

window.addEventListener("scroll", function () {
  let amountscrollTop = window.scrollY;
  if (amountscrollTop > scrollTop) {
    midp.classList.add("hidden");
    info.classList.add("hidden");
    visdiv.classList.remove("hidden");
    stickybar.classList.add("boxshadowdrop");
  } else {
    midp.classList.remove("hidden");
    info.classList.remove("hidden");
    visdiv.classList.add("hidden");
    stickybar.classList.remove("boxshadowdrop");
  }
  amountscrollTop = scrollTop;
});
