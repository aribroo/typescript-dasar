describe('any', () => {
  it('should can use typedata any', () => {
    // tipe data any adalah tipe data dinamis seperti javascript
    const person: any = {
      id: 12,
      name: 'Rifki Ari',
      age: 21
    };

    person.address = 'Indonesia';

    console.log(person);
  });
});
