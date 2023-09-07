import { Person } from '../src/person';

describe('Interface', () => {
  it('should support in typescript', () => {
    // inisialisasi interface
    interface Seller {
      id: string;
      name: string;
    }

    const seller: Seller = {
      id: '12123',
      name: 'Toko ABC'
    };

    console.log(seller);
  });

  it('should support interface extends', () => {
    interface Employee {
      id: number;
      name: string;
    }

    const employee: Employee = {
      id: 12,
      name: 'Galih'
    };

    console.log(employee);

    // menggunakan extends
    interface Manager extends Employee {
      numberOfEmployees: number;
    }

    const manager: Manager = {
      id: 1,
      name: 'Rifki Ari',
      numberOfEmployees: 10
    };

    console.log(manager);
  });

  it('should support interface function', () => {
    // interface function
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it('should support indexable interface', () => {
    // array
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ['Rifki', 'Ari'];

    console.log(names);

    // object
    interface StringDictionary {
      [index: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Ari',
      address: 'Indonesia'
    };

    console.log(dictionary);
  });

  it('should support function in interface', () => {
    const person: Person = {
      name: 'Rifki Ari',
      sayHello(name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      }
    };

    console.log(person.sayHello('Budi'));
  });

  it('should support intersection types', () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    // interface Person extends HasId, HasName {} => bisa juga seperti ini

    type Person = HasName & HasId;

    const person: Person = {
      id: '1',
      name: 'Rifki Ari'
    };

    console.log(person);
  });

  it('should support type assertions', () => {
    const person: any = {
      name: 'Rifki',
      age: 20
    };

    const person2: Person = person as Person;
    // perlu hati hati dalam melakukan konversi, karena isinya bisa saja berbeda

    console.log(person2);
    // console.log(person2.age); => error, karena interface Person tidak mempunyai attribute age
  });
});
