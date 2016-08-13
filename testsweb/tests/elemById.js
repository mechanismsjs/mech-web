describe("getting an element by id - domElemId document.getElementById(id)", function() {
  it("should find fields using primitive data type initialization", function() {
    expect(document.getElementById("left")).to.not.eql(null);
    expect(document.getElementById("right")).to.not.eql(null);
    expect(document.getElementById(0)).to.not.eql(null);

    var mech = m.elemById("left");
    expect(mech.go).to.equal(document.getElementById("left"));
    expect(mech._cElem).to.equal(document.getElementById("left"));
    expect(mech._cId).to.equal("left");

    var mech2 = m.elemById("right");
    expect(mech2.go).to.equal(document.getElementById("right"));
    expect(mech2._cElem).to.equal(document.getElementById("right"));
    expect(mech2._cId).to.equal("right");

    var mech3 = m.elemById(0);
    expect(mech3.go).to.equal(document.getElementById(0));
    expect(mech3._cElem).to.equal(document.getElementById(0));
    expect(mech3._cId).to.equal(0);

    var mech4 = m.elemById("notfound");
    expect(mech4.go).to.eql(null);
    expect(mech4._cElem).to.eql(null);
    expect(mech4._cId).to.equal("notfound");
  });

  it("should cache the element and recache when the id changes", function() {
    expect(document.getElementById("left")).to.not.eql(null);
    expect(document.getElementById("right")).to.not.eql(null);

    var mech = m.elemById("left");
    expect(mech.go).to.equal(document.getElementById("left"));
    expect(mech._cElem).to.equal(document.getElementById("left"));
    expect(mech._cId).to.equal("left");

    mech.id = "right";
    expect(mech.go).to.equal(document.getElementById("right"));
    expect(mech._cElem).to.equal(document.getElementById("right"));
    expect(mech._cId).to.equal("right");
  });

  it("should find and cache fields using a mechanism", function() {
    expect(document.getElementById("left")).to.not.eql(null);
    expect(document.getElementById("right")).to.not.eql(null);

    var mechStr = m.str("left");
    var mech = m.e$(mechStr); // use other method to access.
    expect(mech.go).to.equal(document.getElementById("left"));

    mechStr.v = "right";
    expect(mech.go).to.equal(document.getElementById("right"));
  });

  it("can define a policy on the web", function() {
    expect(document.getElementById("left")).to.not.eql(null);
    expect(document.getElementById("right")).to.not.eql(null);
    expect(document.getElementById("result")).to.not.eql(null);
    expect(document.getElementById("result").value).to.not.equal(10);

    var x = m.p$s("value",
      m.e$("result"),
      m.add(
        m.p$("value", m.e$("left")),
        m.p$("value", m.e$("right"))
      )
    );

    x.go;

    expect(document.getElementById("result").value).to.equal("10");
  });

});
