function displayPageImage() {
    imageName = getUrlParam("pageImage", "");
    if (imageName) {
        document.getElementById("pageImage").src = "../pics/" + imageName;
    }
}