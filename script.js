document.getElementById("link").addEventListener("click", function() {
    
    var result = confirm("Átlépés a facebook oldalamra:");
    if (result) {
        
        window.open = "https://www.facebook.com/tamara.boruzs/"; 
    } 
    else {
      
        console.log("Átirányítás lemondva."); 
    }
});