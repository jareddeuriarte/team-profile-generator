const Engineer = require('../lib/engineerClass')

describe("Engineer", () => {
    describe("Initialization", () => {
      it('should judge if engineer name, id, and email are defined', () => {
        const obj = new Engineer('Harry','11','Harry@test.com')
        
        expect("name" in obj).toBeDefined();
        expect('id' in obj).toBeDefined();
        expect('email' in obj).toBeDefined();

      });
  
      it('should return the employee role', () => {
          const obj = new Engineer

          expect(obj.getRole()).toBe('Engineer');

      });

      it('should return the name, id, and email of engineer object', () => {
          const obj = new Engineer('Greg','55','Greg@test.com')

          expect(obj.getName()).toBe('Greg');
          expect(obj.getId()).toBe('55');
          expect(obj.getEmail()).toBe('Greg@test.com');

      })

    });
})