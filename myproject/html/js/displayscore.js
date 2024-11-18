function displayPageScore() {
    score = getUrlParam("score", "0");
    
        document.getElementById("score").innerHTML =score ;
    
}