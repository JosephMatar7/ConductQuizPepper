$(document).ready(function () {
    // Create qi session
    QiSession(function (session) {
        console.log("Created a session and connected!");

        // Load the ALmemory service and raise an event that shows that the greeting page was loaded
        session.service("ALMemory").then(function (mem) {
            mem.raiseEvent("pageLoaded", "help");

        }, function(error) {
            console.log("An error occurred:", error);
        });
    }, function () {
        console.log("disconnected");
    });
})

function raiseEvent(name, value) {
    QiSession(function (session) {
        session.service("ALMemory").then(function (mem) {
            mem.raiseEvent(name, value);
        }, function (error) {
            console.log("An error occurred:", error);
        });
    });
}

function serviceTypeButtonListener(n) {
    raiseEvent(getButtonId(n), n);
    //raiseEvent("serviceType", getButtonId(n));
}

function getButtonId(n) {
    switch(parseInt(n)) {
        case 1:
            return "checkIn";
        case 2:
            return "newAppointment";
        default:
            return "checkIn";
    }
}

function getAndFillPage(pageName, pageHeading, pageText, pageImage) {
    //alert("From help: pageName = " + pageName);

    localStorage.setItem("pageHeading", pageHeading);
    localStorage.setItem("pageText", pageText);
    localStorage.setItem("pageImage", pageImage);

    pageName = pageName.toLowerCase();
    
    switch(pageName) {
        case "index":
            window.location = "../index.html";
            break;
        case "displayinfo":
            window.location = "displayinfo.html";
            break;
        case "displayimage":
            window.location = "displayimage.html";
            break;
        case "confirmation":
            window.location = "confirmation.html";
            break;
        default:
            window.location = "../index.html";
            return;
    }
}

function getPage(pageName) {
    pageName = pageName.toLowerCase();

    switch(pageName) {
        case "index":
            window.location = "../index.html";
            break;
        case "displayimage":
            window.location = "displayimage.html";
            break;
        default:
            window.location = "../index.html";
            return;
    }
}