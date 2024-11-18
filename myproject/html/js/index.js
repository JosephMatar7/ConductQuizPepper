var data = '{}'
// On Load
$(document).ready(function () {
	
	var settings = JSON.parse(data);
	localStorage.setItem("settings", data);

    // Create qi session
    QiSession(function (session) {
        console.log("Created a session and connected!");

        // Load the ALmemory service and raise an event that shows that the greeting page was loaded
        session.service("ALMemory").then(function (mem) {
            mem.raiseEvent("pageLoaded", "index");

        }, function(error) {
            console.log("An error occurred:", error);
        });
    }, function () {
        console.log("disconnected");
    });
})

function getAndFillPage(pageName, pageHeading, pageText, pageImage) {
    //alert("From index: pageName = " + pageName);
    
    localStorage.setItem("pageHeading", pageHeading);
    localStorage.setItem("pageText", pageText);
    localStorage.setItem("pageImage", pageImage);
    
    pageName = pageName.toLowerCase();
    
    switch(pageName) {
        case "help":
            window.location = "pages/help.html";
            break;
        case "displayinfo":
            window.location = "pages/displayinfo.html";
            break;
        case "confirmation":
            window.location = "pages/confirmation.html";
            break;
        case "displayimage":
            window.location = "pages/displayimage.html";
            break;
        default:
            window.location = "index.html";
            return;
    }
}

function getPage(pageName) {
    pageName = pageName.toLowerCase();
    
    switch(pageName) {
        case "help":
            window.location = "pages/help.html";
            break;
        case "confirmation":
            window.location = "pages/confirmation.html";
            break;
        case "displayimage":
            window.location = "pages/displayimage.html";
            break;
        default:
            //window.location = "index.html";
            return;
    }
}
