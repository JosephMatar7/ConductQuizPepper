function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(param, defaultVal){
    var urlParam = defaultVal;

    if (window.location.href.indexOf(param) > -1) {
        urlParam = getUrlVars()[param];
    }
    return urlParam;
}

function displayPageInformation() {
    document.getElementById("pageHeading").innerHTML = decodeURI(getUrlParam("pageHeading", ""));
    document.getElementById("pageText").innerHTML  = decodeURI(getUrlParam("pageText", ""));

    imageName = getUrlParam("pageImage", "");
    if (imageName) {
        document.getElementById("pageImage").src = "../pics/" + imageName;
    }
}

function updateInputField() {
    fieldTitle = decodeURI(getUrlParam("pageHeading", ""));

    document.getElementById("fieldTitle").innerHTML = fieldTitle;

}

function getPage(pageName) {
    pageName = pageName.toLowerCase();

    switch(pageName) {
        case "index":
            window.location = "../index.html";
            break;
        case "help":
            window.location = "help.html";
            break;
        case "displayinfo":
            window.location = "displayinfo.html";
            break;
        case "confirmation":
            window.location = "confirmation.html";
            break;
        case "displayimage":
            window.location = "displayimage.html";
            break;
        default:
            window.location = "../index.html";
            return;
    }
}