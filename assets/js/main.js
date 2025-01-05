var loadinAnimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("body").css("direction");

  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }

  loadinAnimation
    .to(".splach .splach_front", {
      y: "100%",
      duration: 1.2,
      ease: "expo.inOut",
    })
    .to(".splach .splach_behind", {
      top: "-100%",
      duration: 1.2,
      ease: "expo.inOut",
    })
    .to(".splach", {
      zIndex: "-1",
      opacity: 0,
      duration: 1.2,
      ease: "expo.inOut",
    });
  loadinAnimation.pause();

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // layeranimation.play();
  setTimeout(() => {
    loadinAnimation.play();
  }, 500);
  var currentDir = $("a").css("direction");
  console.log(currentDir);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "right-front" : "left-front",
    },
    theme: "light",
  });
});
