# Tracker
Frontend js library for tracking events

## Usage

```javascript
  // Collect initial client data
  var TRACKER_CLIENT_DATA = (function() {
      var userAgent = navigator.userAgent;
      var referrer = document.referrer;
      var params = location.search;
      return {
          "userAgent": userAgent,
          "referrer": referrer,
          "params": params
      };
  })();
  
  // Create an event queue for the tracking events before script is loaded
  if(!window._szTrackerEventQueue) {
      window._szTrackerEventQueue = [];
  }
  window._szTrackerEventQueue.push({eventName: 'm_new_load'});
  
  // Track the events
  szTrack({eventName: 'button_clicked', foo:'bar'});
```





License
=======
