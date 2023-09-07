describe('Test alias', () => {
    it('should can use type alias', () => {
        const category = {
            id: '1',
            name: 'Handphone'
        };
        const product = {
            id: '1',
            name: 'Samsung S20',
            price: 25000000,
            category: category
        };
        console.log(product);
    });
});
export {};
