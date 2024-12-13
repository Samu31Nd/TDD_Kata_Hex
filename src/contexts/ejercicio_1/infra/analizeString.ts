const belowTwenty: string[] = [
    '' ,'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tens: string[] = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

const andSoOn: string[] = [
    '', 'thousand', 'million', 'billion', 'trillion'
];

const helper = (n: number): string => {
    if(n === 0) return belowTwenty[0];
    else if(n<20) return belowTwenty[n] + ' ';
    else if(n <100) return tens[Math.floor(n/10)] + ' ' + helper(n%10);
    else return belowTwenty[Math.floor(n/100)] + ' hundred ' + helper(n%100);
}


export const analizeNumber = (num:number):string => {
    if(num === 0)
        return "zero";
    
    var result: string = '';
    let i = 0;

    while(num > 0){
        if(num%1000 != 0){
            result = helper(num%1000) + andSoOn[i] + ' ' + result;
        }
        num = Math.floor(num/1000);
        i++;
    }

    return result.trim();
}