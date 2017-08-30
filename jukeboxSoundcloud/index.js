$( document ).ready(function() {
     $("#buttonSearch").click(function(){
          $("#bodyContent").hide();
     });
     $('#playButton').click(function(){
          var ButtonIconClass = $("#playClass");
               if (ButtonIconClass.hasClass("fa fa-play")) {
                         $("#playClass").attr("class","fa fa-pause")
               } else {
                    $("#playClass").attr("class","fa fa-play")
                    }
        });


});
