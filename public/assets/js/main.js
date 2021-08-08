console.log("Sasas");
// src="assets/js/main.js"

window.addEventListener("load", function () {
  // "use strict";

  console.log("hell");

  // Nav Menu
  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    console.log("Cliecked on toffle");

    // if (
    //   location.pathname.replace(/^\//, "") ==
    //     this.pathname.replace(/^\//, "") &&
    //   location.hostname == this.hostname
    // ) {
    // var hash = this.hash;
    // var target = $(hash);
    // if (target.length) {
    // e.preventDefault();

    // if ($(this).parents(".nav-menu, .mobile-nav").length) {
    //   $(".nav-menu .active, .mobile-nav .active").removeClass("active");
    //   $(this).closest("li").addClass("active");
    // }

    // if (hash == "#header") {
    //   $("#header").removeClass("header-top");
    //   $("section").removeClass("section-show");
    //   if ($("body").hasClass("mobile-nav-active")) {
    //     $("body").removeClass("mobile-nav-active");
    //     $(".mobile-nav-toggle i").toggleClass(
    //       "icofont-navigation-menu icofont-close"
    //     );
    //     $(".mobile-nav-overly").fadeOut();
    //   }
    //   return;
    // }

    // if (!$("#header").hasClass("header-top")) {
    //   $("#header").addClass("header-top");
    //   setTimeout(function () {
    //     $("section").removeClass("section-show");
    //     $(hash).addClass("section-show");
    //   }, 350);
    // } else {
    //   $("section").removeClass("section-show");
    //   $(hash).addClass("section-show");
    // }

    // $("html, body").animate(
    //   {
    //     scrollTop: 0,
    //   },
    //   350
    // );

    if ($("body").hasClass("mobile-nav-active")) {
      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").fadeOut();
    }

    // return false;
    // }
    // }
  });

  console.log("len" + $(".nav-menu").length);

  // Mobile Navigation
  // if ($(".nav-menu").length) {
  console.log("mobile vg");
  var $mobile_nav = $(".nav-menu").clone().prop({
    class: "mobile-nav d-lg-none",
  });
  $("body").append($mobile_nav);
  $("body").prepend(
    '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
  );
  $("body").append('<div class="mobile-nav-overly"></div>');

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
    $(".mobile-nav-overly").toggle();
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
        $(".mobile-nav-overly").fadeOut();
      }
    }
  });
  // } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  //   $(".mobile-nav, .mobile-nav-toggle").hide();
  // }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

});
