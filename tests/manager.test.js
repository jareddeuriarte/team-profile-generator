const Manager = require('../lib/managerClass')


describe("Manager", () => {
    describe("Initialization", () => {
      it('should judge if manager name, id, and email are defined', () => {
        const obj = new Manager('Abby','8','Abby@test.com')
        
        expect("name" in obj).toBeDefined();
        expect('id' in obj).toBeDefined();
        expect('email' in obj).toBeDefined();

      });
  
      it('should return the employee role', () => {
          const obj = new Manager

          expect(obj.getRole()).toBe('Manager');

      });

      it('should return the name, id, and email of engineer object', () => {
          const obj = new Manager('Aaron','1','Aaron@test.com')

          expect(obj.getName()).toBe('Aaron');
          expect(obj.getId()).toBe('1');
          expect(obj.getEmail()).toBe('Aaron@test.com');

      })

    });
})