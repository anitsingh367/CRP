// Swiper Js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//   Navbar
const header = document.querySelector("nav");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// #btnScrollTop
const btnScrollTop = document.querySelector("#btnScrollTop");
btnScrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
}

window.onresize = function() {
  const pageWidth = window.matchMedia("(max-width: 380px)");
  if (pageWidth.matches) {
    document.getElementsByClassName("swiper-pagination")[0].style.display =
      "none";
  }
  else{
    document.getElementsByClassName("swiper-pagination")[0].style.display =
      "block";
  }
}


