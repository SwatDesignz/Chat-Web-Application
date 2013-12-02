     $("#field input").keypress(function(ev){
    if (ev.keyCode == 13) {
        $("#send")[0].submit();
    }
});
