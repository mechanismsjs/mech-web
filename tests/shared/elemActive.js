describe("getting the active element", function() {
  it("should not wipeout Object prototype and be a mechanism", function() {
    var mech = m.elemActive(5);
    expect(mech).to.have.property('toString');
    expect(m._.ElemActive).to.not.be.undefined;
    expect(m.e$).to.not.be.undefined;
  });

  it("should have correct properties", function() {
    var mech = m.elemActive();
    expect(mech.isMech).to.be.true;
  });

});
