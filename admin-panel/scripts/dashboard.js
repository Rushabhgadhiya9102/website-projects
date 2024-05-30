$(' #analysis, #sales, #register').hide();

$('#sidebar>button').on('click',function(){
    $('#dashboard, #sales, #register, #analysis').hide();
   $($(this).attr("for")).show(); 
})