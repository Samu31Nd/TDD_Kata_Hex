export class Calculator {
    constructor(){}

    public add(numbersInString: string):number{
        if(numbersInString==='')
            return 0;
        let nums = numbersInString.split(',');
        if(nums.length === 0)
            return 0;
        let result = 0;
        nums.forEach((number) => {
            result+=Number.parseInt(number);
        })

        return result;
    }
}