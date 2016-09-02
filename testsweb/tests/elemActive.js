describe("getting active element", function() {
  it("should find fields using primitive data type initialization", function() {
    var mech = m.elemActive();
    expect(mech.go).to.equal(document.activeElement);
  });

});
