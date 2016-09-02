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
