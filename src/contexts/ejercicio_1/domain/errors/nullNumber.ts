export class NullError extends Error {
    constructor() {
        super(`Not good passing NaN, bonk!`);
    }
}