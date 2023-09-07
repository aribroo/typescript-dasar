import { sayHello } from '../src/say-hello';
describe('Hello', () => {
    it('should say hello', () => {
        const name = 'Hello Ari';
        expect(name).toBe('Hello Ari');
    });
});
describe('sayHello function', () => {
    it('should can return say hello', () => {
        expect(sayHello('Rifki Ari')).toBe('Hello Rifki Ari');
    });
});
