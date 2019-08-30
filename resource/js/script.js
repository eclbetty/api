function MenuButtonBinding() {
  if (console.log($("#menu-button").length + "_" + IsMenuButtonBinding), 1 != IsMenuButtonBinding) return 0 == $("#menu-button").length && 0 == IsMenuButtonBinding ? void setTimeout(MenuButtonBinding, 400) : void $("#menu-button").sidr({
    name: "sidr-main",
    source: "#mobile-navigation",
    renaming: !1,
    side: "right",
    onOpen: function() {
      $("body").prepend("<div class='sidr-overlay fading'></div>"), scroll = $(window).scrollTop(), $("body").css("margin-top", -1 * scroll), $("html, body").addClass("prevent-scroll")
    },
    onOpenEnd: function() {
      $(".sidr-overlay").removeClass("fading")
    },
    onClose: function() {
      $(".sidr-overlay").addClass("fading"), $("body").css("margin-top", "auto"), $("html, body").removeClass("prevent-scroll"), $(window).scrollTop(scroll)
    },
    onCloseEnd: function() {
      $(".sidr-overlay").remove()
    }
  })
}
var IsMenuButtonBinding = 0;
$(document).ready(function() {
  $("body").removeClass("preload"), MenuButtonBinding(), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[role="tab"]').not('[data-toggle="collapse"]').not(".navbar-toggler").click(function(e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var o = $(this.hash);
      o = o.length ? o : $("[name=" + this.hash.slice(1) + "]"), o.length && (e.preventDefault(), $("html, body").animate({
        scrollTop: o.offset().top
      }, 1e3, function() {
        var e = $(o);
        if (e.focus(), e.is(":focus")) return !1;
        e.attr("tabindex", "-1"), e.focus()
      }))
    }
  }), setTimeout(function() {
    $(".same-height").matchHeight(), $(".game-card").matchHeight(), $(".game-card .desc").matchHeight()
  }, 200), $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !1,
    fade: !0,
    pauseOnFocus: !1,
    pauseOnHover: !1,
    asNavFor: ".banner-nav",
    autoplay: !0,
    autoplaySpeed: 7e3,
    draggable: !1,
    swipe: !1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        dots: !0,
        fade: !1,
        swipe: !0
      }
    }]
  }), $(".banner-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: ".banner-slider",
    pauseOnFocus: !1,
    pauseOnHover: !1,
    dots: !1,
    focusOnSelect: !0,
    swipe: !1,
    draggable: !1,
    autoplay: !1
  }), $(".featured-games-slider").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: !0,
    dots: !1,
    autoplay: !1,
    pauseOnFocus: !1,
    pauseOnHover: !1,
    infinite: !0,
    draggable: !1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: !0,
        autoplay: !0,
        autoplaySpeed: 6e3
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        draggable: !0,
        slidesToScroll: 4,
        autoplay: !0,
        autoplaySpeed: 6e3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        draggable: !0,
        slidesToScroll: 3,
        autoplay: !0,
        autoplaySpeed: 6e3
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        draggable: !0,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 6e3
      }
    }]
  }), $(".content-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    infinite: !0
  }), $(".product-slider").slick({
    slidesToShow: 4,
    arrows: !1,
    dots: !1,
    autoplay: !1,
    draggable: !1,
    swipe: !1,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: !0,
        centerPadding: "30px",
        autoplay: !0,
        draggable: !0,
        swipe: !0
      }
    }, {
      breakpoint: 767,
      settings: {
        centerMode: !0,
        autoplay: !0,
        draggable: !0,
        swipe: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "200px"
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        autoplay: !0,
        draggable: !0,
        swipe: !0,
        centerPadding: "140px"
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        autoplay: !0,
        draggable: !0,
        swipe: !0,
        centerPadding: "60px"
      }
    }]
  }), $(".category-slider").slick({
    slidesToShow: 4,
    arrows: !1,
    dots: !1,
    autoplay: !1,
    draggable: !1,
    swipe: !1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !0,
        draggable: !0,
        swipe: !0,
        dots: !0,
        autoplaySpeed: 6e3,
        infinite: !0
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: !0,
        draggable: !0,
        swipe: !0,
        autoplaySpeed: 6e3,
        infinite: !0,
        dots: !0
      }
    }, {
      breakpoint: 767,
      settings: {
        autoplay: !0,
        draggable: !0,
        swipe: !0,
        slidesToShow: 1,
        autoplaySpeed: 6e3,
        slidesToScroll: 1,
        dots: !0,
        infinite: !0
      }
    }]
  }), $('[data-toggle="popover"]').popover({}), $(".hoverpop").popover({
    trigger: "hover"
  }).on("mouseenter", function() {
    var e = this;
    $(this).popover("show"), $(".popover").on("mouseleave", function() {
      $(e).popover("hide")
    })
  }).on("mouseleave", function() {
    var e = this;
    setTimeout(function() {
      $(".popover:hover").length || $(e).popover("hide")
    }, 100)
  });
  var e = 0;
  $("#reload-validator").click(function(o) {
    e += 360, $("#reload-validator").css({
      "transition-duration": "0.7s",
      transform: "rotate(" + e + "deg)",
      "-ms-transform": "rotate(" + e + "deg)",
      "-moz-transform": "rotate(" + e + "deg)",
      "-webkit-transform": "rotate(" + e + "deg)",
      "-o-transform": "rotate(" + e + "deg)"
    })
  });
  var o = window.location.href;
  o = o.substring(0, -1 == o.indexOf("#") ? o.length : o.indexOf("#")), o = o.substr(o.lastIndexOf("/") + 1);
  var o = "./" + o;
  "" == o && (o = "index.html"), $("header .nav-link").each(function() {
    var e = $(this).attr("href");
    o == e && $(this).addClass("active")
  }), $(".readmore").click(function() {
    $(this).parent(".read-box").addClass("expand")
  })
}), $(window).on("resize orientationchange", function() {
  $(".banner-nav").slick("resize")
}), $(document).on("click", function() {
  $.sidr("close", "sidr-main")
});
