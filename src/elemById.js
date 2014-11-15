function elemById(id) {
	var f = Object.create(ElemById.prototype);
	f._id = id;
	if (id && id.isMech) {
		id._parDir = f;
	}
	return f;
};

function ElemById() {};
ElemById.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true
		}
	},
	id: {
		enumerable: false,
		get: function() {
			return this._id
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