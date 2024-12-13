export class PointSaleBar {
    constructor(){}
    private static items: number[] = [];

    static ScanningCode(
        numberBarcode: number,
    ): string{

        switch (numberBarcode) {
            case 12345:
                this.items.push(7.25);
                return '$7.25';
                break;
            case 23456:
                this.items.push(12.50);
                return '$12.50';
                break;
            case 99999:
                this.items.push(0);
                return 'Error: barcode not found';
                break;
            default: 
                return 'Error: empty barcode'
                break;
        }

        return 'P';
    }    

    static total():string{
        const total = this.items.reduce((sum, price) => sum + price, 0);
        return `Total: $${total.toFixed(2)}`;
    }

    static clean(): void{
        this.items = [];
    }

}