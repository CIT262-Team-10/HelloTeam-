import sayHello from '../utils/hello.isaac';

describe('hello function', function() {
    it('should return "hello"', function() {
        const result = sayHello();

        expect(result).toEqual('hello');
    });
});