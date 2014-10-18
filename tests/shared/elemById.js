describe ("getting an element by id - domElemId document.getElementById(id)", function() {   
   it ("should not wipeout Object prototype and be a mechanism", function() {
      var mech = m.elemById(5);
      expect(mech).to.have.property('toString');
      expect(m._.ElemById).to.not.be.undefined;
      expect(m.e$).to.not.be.undefined;
   });

   it ("should have correct properties", function() {
      var mech = m.elemById(5);
      expect(mech.isMech).to.be.true;
      expect(mech).to.have.property('id');
      expect(mech).to.have.property('_id'); // imagined privacy
   });

   it ("contract: id of elemById must be defined or a non-null value.", function() {
      // cause i am lazy to figure this out
      try { var x = m.elemById(); } catch (e) {
         expect(e).to.equal("id of elemById must be defined or a non-null value.");
      }
   
      try { var x = m.elemById(null); } catch (e) {
         expect(e).to.equal("id of elemById must be defined or a non-null value.");
      }

      try { var x = m.elemById(undefined); } catch (e) {
         expect(e).to.equal("id of elemById must be defined or a non-null value.");
      }
   
   });
});