const Intern = require('../lib/internClass')

describe("Intern", () => {
    describe("Initialization", () => {
      it('should judge if intern name, id, and email are defined', () => {
        const obj = new Intern('Charlie','87','Charlie@test.com')
        
        expect("name" in obj).toBeDefined();
        expect('id' in obj).toBeDefined();
        expect('email' in obj).toBeDefined();

      });
  
      it('should return the employee role', () => {
          const obj = new Intern

          expect(obj.getRole()).toBe('Intern');

      });

      it('should return the name, id, and email of engineer object', () => {
          const obj = new Intern('Monica','6','Monica@test.com')

          expect(obj.getName()).toBe('Monica');
          expect(obj.getId()).toBe('6');
          expect(obj.getEmail()).toBe('Monica@test.com');

      })

    });
})