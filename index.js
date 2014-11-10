'use strict';

var request = require('request');

function goRoost(username, password) {
  if (!(this instanceof goRoost)) {
    return new goRoost(username, password);
  }
  this.pushUrl = 'https://' + username + ':' + password + '@' + 'go.goroost.com/api/push';
}

goRoost.prototype.send = function (notification, callback) {
  if (notification.alert && notification.url) {
    request({url: this.pushUrl, method: 'POST', JSON:true, body: JSON.stringify(notification)}, function (error, response, body) {
      if (error) {
        callback(error);
      } else {
        try {
          body = JSON.parse(body);
          if (body.success) {
            callback(null, body);
          } else {
            callback(body);
          }
        } catch (err) {
          callback(err);
        }
      }
    });
  } else {
    throw Error('Alert and Url are required for notification');
  }
};

module.exports = goRoost;