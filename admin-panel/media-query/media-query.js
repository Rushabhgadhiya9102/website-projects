// --------------------- M E D I A - Q U E R Y  ----------------------

if(visualViewport.width <= 600){

    // ----------- side-bar --------------
    $(".bx-menu-alt-left").on("click",function(){
      $("#side-bar").css("display","visible");
      $("#side-bar").css("width","200px")
      $(".btnNameHide").show();
      $("#side-bar").toggle()
    })
    
    
      $(".nav-button>span").on("click", function () {
        $("#dashboard,#user,#messages,#analysis,#files,#order,#map,#setting,#register").hide();
        $($(this).attr("for")).show();
        $("#side-bar").hide();
      });
      
      // ----------- message - section ----------
      
      $("#chat-section").hide();
  
      $(".people-list").on("click",function(){
        $("#main-conversation-section").hide();
        $("#chat-section").show();
        $(".formater-section").hide();
      })
  
      $(".chat-name").on("click",function(){
        $("#main-conversation-section").show();
        $("#chat-section").hide();
        $(".formater-section").show();
      })
      
     
    }
  