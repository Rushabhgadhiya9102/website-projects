// ----------- T O G G L E - T H E M E ----------------

$(document).ready(function () {

  const systemSettingDark = window.matchMedia("(prefers-color-scheme: light)"); 
  if (systemSettingDark.matches) {
    $("body").addClass("light-mode");
  } else {
    $("body").addClass("dark-mode");
  }
$(".slider").on("click",function(){
   $("body").toggleClass("dark-mode");
})
});

 