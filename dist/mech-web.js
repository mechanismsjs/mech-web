// mech-web.js
// version: 0.2.3
// author: Eric Hosick <erichosick@gmail.com> (http://www.erichosick.com/)
// license: MIT
(function() {
"use strict";

var root = this; // window (browser) or exports (server)
var m = root.m || {}; // merge with previous or new module
m._ = m._ || {}; // merge with pervious or new sub-module
m._["version-web"] = '0.2.3'; // version set through gulp build

// export module for node or the browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m;
}

function elemActive() {
  return Object.create(ElemActive.prototype);
}

function ElemActive() {}
ElemActive.prototype = Object.create(Object.prototype, {
  isMech: { get: function() { return true; } },
  go: {
    enumerable: false,
    get: function() {
      return document.activeElement;
    }
  }
});
m.elemActive = elemActive;
m._.ElemActive = ElemActive;

function elemById(id) {
  var f = Object.create(ElemById.prototype);
  f._id = id;
  if (id && id.isMech) {
    id._parDir = f;
  }
  return f;
}

function ElemById() {}
ElemById.prototype = Object.create(Object.prototype, {
  isMech: {
    get: function() {
      return true;
    }
  },
  id: {
    enumerable: false,
    get: function() {
      return this._id;
    },
    set: function(d) {
      this._id = d;
    }
  },
  go: {
    enumerable: false,
    get: function() {
      if (undefined === this.id || null === this.id) {
        return this.id;
      }
      var field = this._id.isMech ? this._id.go : this._id;
      if (field !== this._cId) {
        this._cId = field;
        this._cElem = document.getElementById(this._cId);
      }
      return this._cElem;
    }
  }
});
m.elemById = elemById;
m.e$ = elemById;
m._.ElemById = ElemById;


}.call(this));