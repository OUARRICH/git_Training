/**
 * @license Angulartics v0.16.3
 * (c) 2014 Luis Farzati http://luisfarzati.github.io/angulartics
 * Adobe analytics(Omniture) update contributed by http://github.com/ajayk
 * License: MIT
 */
(function(angular) {
'use strict';
/**
 * @ngdoc overview
 * @name angulartics.adobe.analytics
 * Enables analytics support for Adobe Analytics (http://adobe.com/analytics)
 */
angular.module('angulartics.adobe.analytics', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {
  $analyticsProvider.settings.trackRelativePath = true;
  $analyticsProvider.registerPageTrack(function (path) {
    if (window.s) s.t([path]);
  });
  /**
   * Track Event in Adobe Analytics
   * @name eventTrack
   *
   * @param {string} action Required 'action' (string) associated with the event
   *
   *
   */
  $analyticsProvider.registerEventTrack(function (action) {
    if (window._satellite) {
    if(action) {
      if(action.toUpperCase() === "CLIC")
         _satellite.track('clic');
      else if(action.toUpperCase() === "EXIT")
         _satellite.track('clic');
    }
    else
      _satellite.track('clic');
    }
  });
}]);
})(angular);