import { Mahasiswa } from '../src/optional-properties';

describe('Optional properties', () => {
  it('should support', () => {
    const mahasiswa: Mahasiswa = {
      id: '2021435',
      name: 'Rifki Ari',
      age: 20,
      hobbies: ['Bermain', 'Tidur']
    };

    console.log(mahasiswa);
  });
});
