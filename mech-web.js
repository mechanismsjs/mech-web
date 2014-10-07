// http://www.erichosick.com
// (c) 2014 Eric K. Hosick
// mech-web may be freely distributed under the MIT license.
// follows underscore library
(function() {
   "use strict";
   var m = require('mech-core');
   
   // Establish the root object, `window` in the browser, or `exports` on the server.
   var root = this;

   // Save the previous value of the `_` variable.
   var previousWebMech = root.mw;
   
   // Create a safe reference to the object for use below.
   var mw = function(obj) {
     if (obj instanceof mw) return obj;
     if (!(this instanceof mw)) return new mw(obj);
     this._wrapped = obj;
   };

   // Export the mechanism object for **Node.js**, with
   // backwards-compatibility for the old `require()` API. If we're in
   // the browser, add `m` as a global object.
   if (typeof exports !== 'undefined') {
     if (typeof module !== 'undefined' && module.exports) {
       exports = module.exports = mw;
     }
     exports.mw = mw;
   } else {
     root.mw = mw;
   }

   // Current version.
   mw.VERSION = '0.1.2';

   function ElemById() {};
   ElemById.prototype = Object.create ( m.MechF.prototype, {
      id: { enumerable: false,
         get: function() { return this._id },
         set: function(d) {
            if (m.isUsable(d)) {
               this._id = d;
            } else {
               throw ("id of elemById must be defined or a non-null value.")
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
   function elemById(id) {
      var f = Object.create(ElemById.prototype);
      f.id = id;
      return f;
   };
   mw.elemById = elemById;
   mw.e$ = elemById;
   mw.ElemById = ElemById;
}.call(this));