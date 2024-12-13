export class NegativeNumberError extends Error {
    constructor(num:number) {
        super(`Number must be positive, recieved ${num}`);
    }
}