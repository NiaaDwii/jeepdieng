// menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    //display:blok
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
    } else {
      $c("nav").removeClass("putih");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("Gallery");
  let scrollAmount = 0;
  const scrollStep = 10; // Kecepatan scroll (pixel)
  const scrollInterval = 50; // Interval waktu untuk scroll (ms)

  function autoScroll() {
    scrollAmount += scrollStep;

    // Scroll galeri ke kanan
    gallery.scrollLeft = scrollAmount;

    // Jika sudah mencapai akhir, kembali ke awal
    if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
      scrollAmount = 0; // Reset ke awal
    }
  }

  // Jalankan scroll otomatis
  setInterval(autoScroll, scrollInterval);
});
