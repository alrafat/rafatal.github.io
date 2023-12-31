window.addEventListener("load", function () {
  // "use strict";

  // Nav Menu
  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    if ($("body").hasClass("mobile-nav-active")) {
      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").fadeOut();
    }
  });

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

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });
});
