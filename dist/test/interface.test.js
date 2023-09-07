describe('Interface', () => {
    it('should support in typescript', () => {
        const seller = {
            id: '12123',
            name: 'Toko ABC'
        };
        console.log(seller);
    });
    it('should support interface extends', () => {
        const employee = {
            id: 12,
            name: 'Galih'
        };
        console.log(employee);
        const manager = {
            id: 1,
            name: 'Rifki Ari',
            numberOfEmployees: 10
        };
        console.log(manager);
    });
    it('should support interface function', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', () => {
        const names = ['Rifki', 'Ari'];
        console.log(names);
        const dictionary = {
            name: 'Ari',
            address: 'Indonesia'
        };
        console.log(dictionary);
    });
    it('should support function in interface', () => {
        const person = {
            name: 'Rifki Ari',
            sayHello(name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.log(person.sayHello('Budi'));
    });
    it('should support intersection types', () => {
        const person = {
            id: '1',
            name: 'Rifki Ari'
        };
        console.log(person);
    });
    it('should support type assertions', () => {
        const person = {
            name: 'Rifki',
            age: 20
        };
        const person2 = person;
        // perlu hati hati dalam melakukan konversi, karena isinya bisa saja berbeda
        console.log(person2);
        // console.log(person2.age); => error, karena interface Person tidak mempunyai attribute age
    });
});
export {};
