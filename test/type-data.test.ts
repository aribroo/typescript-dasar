describe('dataTypes', () => {
  it('should must declare', () => {
    let name: string = 'Rifki Ari';
    let balance: number = 2000000;
    let isVip: boolean = true;

    console.log(name);
    console.log(balance);
    console.log(isVip);

    // name = 100; => error
    // balance = 'galih'; => error
    // isVip = 100; => error
  });
});
