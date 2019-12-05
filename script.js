
jQuery(document).ready(function($){

    $('#prepend').on('click',function(){
        var str = document.getElementById("myText").value;
        if(str == ""){
            alert("No Input Found!");
        }
        else{
            $(" <b>Entry :" + str + " </b> ").prependTo('#tasks');
        }
    });
    
});


