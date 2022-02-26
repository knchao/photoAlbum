

$(document).ready(function(){

    $("#submitBtn").css({"border": "2px solid yellow", "background-color": "lightblue"});

    $("#span1").hide();
    $("#span2").hide();
    $("#span3").hide();

    $('#submitBtn').click(function(){

         let userName = $("input[name=userName]").val();
         let imgTitle = $("input[name=imgTitle]").val();
         let comment = $("input[name=comment]").val();

         let returnStatus = true;

        if (userName.length < 6) {
            returnStatus = false;
            $("#span1").show();
        }

        if (imgTitle.length == 0) {
            returnStatus = false;
            $("#span2").show();
        }

        if (comment.length == 0) {
            returnStatus = false;
            $("#span3").show();
        }

         return returnStatus;

    });

    $("input").focusout(function(){

        let userName = $("input[name=userName]").val();
        let imgTitle = $("input[name=imgTitle]").val();
        let comment = $("input[name=comment]").val();


        if (this.name === "userName") {
            if (userName.length < 6) {
               $("#span1").show();
            } else{
                $("#span1").hide();
            }
        }

        if (this.name === "imgTitle") {
            if (imgTitle.length == 0) {
                $("#span2").show();
            } else{
                $("#span2").hide();
            }
        }

        if (this.name === "comment") {
            if (comment.length == 0) {
                $("#span3").show();
            } else{
                $("#span3").hide();
            }
        }

    });
    
});