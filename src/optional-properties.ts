export type Mahasiswa = {
  id: string;
  name: string;
  age: number;
  hobbies?: Array<string>; //menggunakan tanda ? untuk optional
};
