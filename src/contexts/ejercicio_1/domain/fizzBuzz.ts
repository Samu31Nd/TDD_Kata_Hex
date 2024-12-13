import { analizeNumber } from "../infra/analizeString";
import { NegativeNumberError } from "./errors/negativeNumber";
import { NullError } from "./errors/nullNumber";

export class FizzBuzzSolver {

    public static fizzBuzz(
        numberInput: number,
    ):string{

        if(isNegative(numberInput))
            throw new NegativeNumberError(numberInput);

        if(this.isFizzOrBuzz(numberInput))
            return this.fizzBuzzString(numberInput);

        return analizeNumber(numberInput);
    }

    private static isFizzOrBuzz(num:number):boolean{
        return (num%5 == 0 || num%3 == 0) && num !== 0;
    }

    private static fizzBuzzString(num:number):string {
        var returnString:string = "";
        if(num%3 == 0)
            returnString += "Fizz";
        if(num%5 == 0)
            returnString += "Buzz";
        return returnString;
    }
}

const isNegative = (num:number):boolean => num < 0;