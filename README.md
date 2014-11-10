Goroost NodeJS module
============
NodeJS API for https://goroost.com/

###Send Notification
```javascript
var roost = require('roost')('APP_KEY', 'APP_SECRET');

var notification = {
  alert: 'Hello There',
  url: 'http://goroost.com',
  segments: ['registered'],
};

roost.send(notification, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});