describe("getting an element by id - domElemId document.getElementById(id)", function() {
	it("should not wipeout Object prototype and be a mechanism", function() {
		var mech = m.elemById(5);
		expect(mech).to.have.property('toString');
		expect(m._.ElemById).to.not.be.undefined;
		expect(m.e$).to.not.be.undefined;
	});

	it("should have correct properties", function() {
		var mech = m.elemById(5);
		expect(mech.isMech).to.be.true;
		expect(mech).to.have.property('id');
		expect(mech).to.have.property('_id'); // imagined privacy
	});

	it("should set _parDir of child mechanisms to parent", function() {
		var mech = m.elemById(1);
		var mech3 = m.elemById(mech);
		expect(mech._parDir).to.equal(mech3);
	});

	it("should not get unhappy when a bad value is provided", function() {
		var mech = m.elemById();
		expect(mech.go).to.be.undefined;

		var mech2 = m.elemById(null);
		expect(mech2.go).to.be.null;
	});

});