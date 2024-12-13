import { PointSaleBar } from "../src/contexts/ejercicio_5/domain/pointSale"


test('test bar code', () => {
    expect(PointSaleBar.ScanningCode(12345)).toBe('$7.25');
    expect(PointSaleBar.ScanningCode(99999)).toBe('Error: barcode not found'); 
    PointSaleBar.clean();
});

test('should calculate the total', () => {
    PointSaleBar.ScanningCode(12345);
    PointSaleBar.ScanningCode(23456);
    expect(PointSaleBar.total()).toBe('Total: $19.75');  
    PointSaleBar.clean();
});
