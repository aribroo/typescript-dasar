"use strict";
describe('Union type data', () => {
    it('should can use typedata union', () => {
        let sample = 'Ari';
        console.log(sample);
        sample = 10;
        console.log(sample);
        sample = true;
        console.log(sample);
    });
    it('should can suppport typeof operator', () => {
        const process = (value) => {
            if (typeof value === 'string')
                return value.toUpperCase();
            else if (typeof value === 'number')
                return value + 2;
            else
                return !value;
        };
        expect(process('Rifki Ari')).toBe('RIFKI ARI');
        expect(process(10)).toBe(12);
        expect(process(true)).toBe(false);
    });
});
