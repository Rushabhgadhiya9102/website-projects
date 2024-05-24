$(document).ready(function () {

  const systemSettingDark = window.matchMedia("(prefers-color-scheme: light)");
  $(".fa-moon").hide();

  if (systemSettingDark.matches) {
    $("body").addClass("dark-mode");
  } else {
    $("body").addClass("light-mode");
  }


  $(".fa-sun").on("click", function () {
    $("body").addClass("dark-mode");
    $("fa-moon").hide();
    $("fa-sun").show();
  });

  $(".fa-moon").on("click", function () {
    $("body").removeClass("dark-mode");
    $("fa-sun").hide();
    $("fa-moon").show();
  });


});