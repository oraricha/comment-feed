'use strict';

/**
 * @ngdoc overview
 * @name comment-feed
 * @description
 * # comment-feed
 *
 * Main module of the application.
 */
angular
  .module('comment-feed', [
    'ngAnimate',
    'ngRoute',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $routeProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: "components/feed/feed.tpl.html",
        controller: "FeedCtrl",
        controllerAs: "vm"
      })
  });
