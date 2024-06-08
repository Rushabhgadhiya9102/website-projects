$(document).ready(function () {

  const systemSettingDark = window.matchMedia("(prefers-color-scheme: light)"); 
  if (systemSettingDark.matches) {
    $("body").addClass("dark-mode");
  } else {
    $("body").addClass("light-mode");
  }
});

$(".fa-moon").hide();

$(".fa-sun").on("click", function () {
  $("body").addClass("dark-mode");
  $("fa-moon").show();
  $("fa-sun").hide();
});

$(".fa-moon").on("click", function () {
  $("body").removeClass("dark-mode");
  $("fa-sun").show();
  $("fa-moon").hide();
});
