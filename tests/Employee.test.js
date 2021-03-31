const Employee = require('../lib/employeeClass')


describe("Employee", () => {
    describe("Initialization", () => {
      it('should judge if employee name, id, and email are defined', () => {
        const obj = new Employee('Jared','11','jared@test.com')
        
        expect("name" in obj).toBeDefined();
        expect('id' in obj).toBeDefined();
        expect('email' in obj).toBeDefined();

      });
  
      it('should return the employee role', () => {
          const obj = new Employee

          expect(obj.getRole()).toBe('Employee');

      });

      it('should return the name, id, and email of employee object', () => {
          const obj = new Employee('Sarah','24','sarah@test.com')

          expect(obj.getName()).toBe('Sarah');
          expect(obj.getId()).toBe('24');
          expect(obj.getEmail()).toBe('sarah@test.com');

      })

    });
})