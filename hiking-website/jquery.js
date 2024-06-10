// ----------- T O G G L E - T H E M E ----------------

$(document).ready(function () {

  $(".fa-sun").hide()
  $(".fa-moon").hide()


  const systemSettingDark = window.matchMedia("(prefers-color-scheme: light)"); 
  if (systemSettingDark.matches) {
    $("body").addClass("light-mode");
    $(".fa-sun").show()
  } else {
    $("body").addClass("dark-mode");
    $(".fa-moon").show()
  }
$(".slider").on("click",function(){
   $("body").toggleClass("dark-mode");
})
});


 