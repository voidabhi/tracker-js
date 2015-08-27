

/*
- encodes js object into query parameters
*/
function getQueryString(e) {
    var n = "";
    for (obj in e) n += obj + "=" + encodeURIComponent(e[obj]) + "&";
    return n+'cookie=' + visitCookie+'&time='+new Date()
}

/*
- loading script async into html head from source src
*/
function sendDataToTracker(src) {
    var head = document.getElementsByTagName("head")[0],
        script = document.createElement("script");
    script.type = "text/javascript",
    script.onload = function() {
        script.remove()
    },
    script.src = src,
    head.appendChild(script);
}

/*
- posting event data (js object) to serve
*/
function doAsyncEventPost(obj) {
    var visitEvent = "http://localhost:3030/visit";
    sendDataToTracker(visitEvent + "?" + getQueryString(obj))
}

/*
- sends all the events in event queue to the server
*/

function flushTrackerEventQueue() {
    if ("_amTrackerEventQueue" in window)
        for (var e = 0; e < _amTrackerEventQueue.length; ++e) {
            var n = _amTrackerEventQueue[e];
            doAsyncEventPost(n)
        }
}

var visitCookie = "-some-cookie-";
/*
 - setting document cookie
 - initializing track function to send event data to server
    - send data to server with amTrack(<js object>)
 - sending all the events already present in event queue to server
 - sending user details to server

*/
if (document.cookie = visitCookie, window.amTrack = function(e) {
        doAsyncEventPost(e)
    }, flushTrackerEventQueue(), "TRACKER_CLIENT_DATA" in window) {
    var clientApi = "http://localhost:3030/clientdetails";
    sendDataToTracker(clientApi + "?" + getQueryString(TRACKER_CLIENT_DATA))
}
