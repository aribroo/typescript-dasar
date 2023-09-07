"use strict";
describe('Array', () => {
    it('should to be array', () => {
        const name = ['Rifki', 'Dimas', 'Galih'];
        const values = [1, 2, 3, 4, 5];
        console.log(name);
        console.log(values);
    });
    it('should can use readonly array', () => {
        const hobbies = ['Membaca', 'Berenang'];
        // hobbies[0] = 'Bersepeda'; => tidak bisa diubah jika readonly
        console.log(hobbies);
    });
    it('should can use tuple', () => {
        const person = ['Joko', 'Budi', 10];
        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);
    });
});
