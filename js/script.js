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

$('.submit').click(function () {
                                    var name = $('#name').val();
                                    var email = $('#email').val();
                                    var message = $('#message');
                                   
                                    if (name == '' || email == '' || message == '') {
                                        alert('dear enter your information correctly!');
                                    } else {
                                        alert(' dear ' + name + ' We have received your message. Thank you for reaching out to us.');
                                    }
                              });
                          


                            });


