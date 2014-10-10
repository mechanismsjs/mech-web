describe ("getting an element by id - domElemId document.getElementById(id)", function() {   
   it ("should not wipeout Object prototype and be a mechanism", function() {
      var mech = mw.elemById(5);
      expect(mech).to.have.property('toString');
      expect(mw.ElemById).to.not.eql(null);
      expect(mw.e$).to.not.eql(null);         
   });

   it ("should have correct properties", function() {
      var mech = mw.elemById(5);
      expect(mech).to.have.property('isMech');
      expect(mech.isMech).to.be.true;
      
      expect(mech).to.have.property('isNull');
      expect(mech.isNull).to.be.false;
      
      expect(mech).to.have.property('isPrim');
      expect(mech.isPrim).to.be.false;
      
      expect(mech).to.have.property('id');
      expect(mech).to.have.property('_id'); // imagined privacy
   });

   it ("contract: id of elemById must be defined or a non-null value.", function() {
      // cause i am lazy to figure this out
      try { var x = mw.elemById(); } catch (e) {
         expect(e).to.equal("id of elemById must be defined or a non-null value.");
      }
   
      try { var x = mw.elemById(null); } catch (e) {
         expect(e).to.equal("id of elemById must be defined or a non-null value.");
      }

      try { var x = mw.elemById(undefined); } catch (e) {
         expect(e).to.equal("id of elemById must be defined or a non-null value.");
      }
   
   });
});