import { Calculator } from '../src/contexts/ejercicio_2/domain/calculator';

test('Calculator: 1+2 = 3', () => {
    let calc = new Calculator();
    
    expect(calc.add("1,2")).toBe(3);
});

test('Calculator: empty', () => {
    let calc = new Calculator();
    
    expect(calc.add("")).toBe(0);
});