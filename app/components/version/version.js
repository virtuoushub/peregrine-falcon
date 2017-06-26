'use strict';

angular.module('twitterApp.version', [
  'twitterApp.version.interpolate-filter',
  'twitterApp.version.version-directive'
])

.value('version', '0.1.0');
