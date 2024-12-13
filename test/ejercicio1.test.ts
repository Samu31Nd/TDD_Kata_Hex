import { FizzBuzzSolver } from '../src/contexts/ejercicio_1/domain/fizzBuzz';

const numbers = [
    3,
    5,
    15,
    20
];

test('Fizz Buzz test', () => {

    expect(FizzBuzzSolver.fizzBuzz(numbers[0])).toBe("Fizz");
    expect(FizzBuzzSolver.fizzBuzz(numbers[1])).toBe("Buzz");
    expect(FizzBuzzSolver.fizzBuzz(numbers[2])).toBe("FizzBuzz");
});

test('Numbers before twelve', () => {
    expect(FizzBuzzSolver.fizzBuzz(7)).toBe("seven");
    expect(FizzBuzzSolver.fizzBuzz(14)).toBe("fourteen");
});

test('Numbers after twelve', () => {
    expect(FizzBuzzSolver.fizzBuzz(101)).toBe("one hundred one");
});

test('zero', () => {
    expect(FizzBuzzSolver.fizzBuzz(0)).toBe("zero");
});

// test('NaN experiment', () => {
//     expect(FizzBuzzSolver.fizzBuzz(numbers[14])).toBe("something");
// })