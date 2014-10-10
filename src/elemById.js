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