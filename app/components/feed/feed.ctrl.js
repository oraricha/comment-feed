/**
 * Created by oraricha on 18/04/2016.
 */
'use strict';

angular.module('comment-feed')
  .controller('FeedCtrl', [ "$scope" ,function ($scope) {

    var self = this;
    self.email = "";
    self.msg = "";
    var gravatarPrefix = "http://www.gravatar.com/avatar/";

    self.comments = [];

    var isFieldsFull = function() {
      return self.email.trim().length > 0 && self.msg.trim().length > 0;
    };

    self.addComment = function() {
      if (!isFieldsFull()) {
        return;
      }
      self.comments.push({
        avatar: gravatarPrefix + md5(self.email.trim().toLowerCase()),
        email: self.email,
        msg: self.msg
      });
    };

  }]);

