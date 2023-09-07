describe('Function', () => {
  it('should support in typescript', () => {
    // function yang me-return nilai
    const sayHello = (name: string): string => {
      return `Hello ${name}`;
    };

    expect(sayHello('Rifki')).toBe('Hello Rifki');

    // function yang tidak me-return nilai
    const printHello = (name: string): void => {
      console.log(`Hello ${name}`);
    };

    printHello('Ari');
  });

  it('should support default value', () => {
    const sayHello = (name: string = 'Guest'): string => {
      return `Hello ${name}`;
    };

    expect(sayHello('Rifki')).toBe('Hello Rifki');
    expect(sayHello()).toBe('Hello Guest');
  });

  it('should support rest parameter', () => {
    const sum = (...values: number[]): number => {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    };

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it('should support optional parameter', () => {
    const sayHello = (firstName: string, lastName?: string): string => {
      if (lastName) return `Hello ${firstName} ${lastName}`;
      else return `Hello ${firstName}`;
    };

    expect(sayHello('Rifki')).toBe('Hello Rifki');
    expect(sayHello('Rifki', 'Ari')).toBe('Hello Rifki Ari');
  });

  it('should support function overloading', () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === 'string') return value.toUpperCase();
      else if (typeof value === 'number') return value * 10;
    }

    expect(callMe('Rifki')).toBe('RIFKI');
    expect(callMe(10)).toBe(100);
  });

  it('should support function as parameter', () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${name}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('Rifki', toUpper)).toBe('Hello RIFKI');

    // dengan arrow function
    const sum = (value: number, operation: (value: number) => number): number => {
      return operation(value);
    };

    expect(sum(10, (number) => number + 2)).toBe(12);
  });
});
