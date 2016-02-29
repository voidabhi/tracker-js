## Tracker
Frontend js library for tracking events

### Import

```html
  <!-- Tracker -->
  <script src="tracker.min.js"></script>
```

### Usage

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


### Contributing

- Please use the [issue tracker](https://github.com/voidabhi/Tracker/issues) to report any bugs or file feature requests.


### License

```

Copyright 2015 Abhijeet Mohan - https://github.com/voidabhi/Tracker

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
