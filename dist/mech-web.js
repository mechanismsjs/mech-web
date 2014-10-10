// mech-web.js
// version: 0.1.3
// author: Eric Hosick <erichosick@gmail.com> (http://www.erichosick.com/)
// license: MIT
(function() {
"use strict";
   
// Establish the root object:
//   'window' in the browser
//   'exports' on the server
var root = this;

// Save the previous mw
var previousMechanisms = root.mw;

// New module or use existing
var mw = mw || {};

// Current version updated by
// gulpfile.js build process
mw["version"] = '0.1.3';

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = mw;
} else {
  root.mw = mw;
}

function elemById(id) {
   var f = Object.create(ElemById.prototype);
   f.id = id;
   return f;
};
function ElemById() {};
ElemById.prototype = Object.create ( Object.prototype, {
   id: { enumerable: false,
      get: function() { return this._id },
      set: function(d) {
         if ((null === d) || (undefined === d)) {
            throw ("id of elemById must be defined or a non-null value.")
         } else {
            this._id = d;
         }
      }
   },
   go: { enumerable: false,
      get: function() {
         var field = this._id.isMech ? this._id.go : this._id;
         if (field !== this._cId) {
            this._cId = field;
            this._cElem = document.getElementById(this._cId);
         }
         return this._cElem;
      }
   }
});
ElemById.prototype.isMech = true;
ElemById.prototype.isNull = false;
ElemById.prototype.isPrim = false;
mw.elemById = elemById;
mw.e$ = elemById;
mw.ElemById = ElemById;

}.call(this));