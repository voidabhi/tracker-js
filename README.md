# Tracker
Frontend js library for tracking events

## Usage

```javascript
  // Client Data
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
```

