$(document).ready(function(){
    $(".de").click(function(){
    $(".lexi").show();
     $(".de").hide();
   });
   $(".lexi").click(function(){
    $(".de").show();
    $(".lexi").hide();
   });
   $(".devv").click(function(){
    $(".leni").show();
    $(".devv").hide();
   });
   $(".leni").click(function(){
    $(".devv").show();
    $(".leni").hide();
   });
   $(".denu").click(function(){
    $(".zela").show();
    $(".denu").hide();
   });
   $(".zela").click(function(){
    $(".denu").show();
    $(".zela").hide();
   }); 
$("#ven1").mouseover(function(){
    $(".wor1").show();
    });
    $("#ven1").mouseleave(function(){
    $(".wor1").hide();
    });
    
 $("#ven2").mouseover(function(){
        $(".wor2").show();
        });
        $("#ven2").mouseleave(function(){
        $(".wor2").hide();
        });
 $("#ven3").mouseover(function(){
            $(".wor3").show();
            });
            $("#ven3").mouseleave(function(){
            $(".wor3").hide();
            });
 $("#ven4").mouseover(function(){
                $(".wor4").show();
                });
                $("#ven4").mouseleave(function(){
                $(".wor4").hide();
                });
 $("#ven5").mouseover(function(){
                    $(".wor5").show();
                    });
                    $("#ven5").mouseleave(function(){
                    $(".wor5").hide();
                    });
    $("#ven6").mouseover(function(){
                        $(".wor6").show();
                        });
                        $("#ven6").mouseleave(function(){
                        $(".wor6").hide();
                        });
    
     $("#ven7").mouseover(function(){
                            $(".wor7").show();
                            });
                            $("#ven7").mouseleave(function(){
                            $(".wor7").hide();
                            });

$("#ven8").mouseover(function(){
                                $(".wor8").show();
                                });
                                $("#ven8").mouseleave(function(){
                                $(".wor8").hide();
                                });

 $("form#form1").on('submit',function(event){
           event.preventDefault();
           var name = $("input#name").val();
           var email = $("input#email").val();
           var message = $("textarea#message").val();

           if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
               alert ("Hello " + name + ", Thank you for reaching out, we'll get back to you shortly...");
           }
           else if($("input#name").val() && $("input#email").val()){
               alert("Thank you for reaching ou to us. If you wish to leave a message please type in on the message section..");
           }
          else{
            alert("Please provide correct name or email")
          }
       });


                            });


