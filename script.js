function openFacebookPage(){
    var facebookUrl = "https://www.facebook.com/tamara.boruzs/";
    var confirmation= confirm("Biztos el szeretne menni a Facebook oldalra?");

    if(confirmation){
        windows.open(facebookUrl, '_blank');
    }
    else{
        alert("A facebook oldal nem lett megnyitva!");
    }
}
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');