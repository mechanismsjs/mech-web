(function() {
"use strict";
   
// Establish the root object:
//  'window' in the browser
//  'exports' on the server
var root = this;

// Save the previous mw
var previous = root.mw;

// New module or use existing
var mw = previous || {};

// Current version updated by
// gulpfile.js build process
mw["version"] = '{{VERSION}}';

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = mw;
} else {
  root.mw = mw;
}
