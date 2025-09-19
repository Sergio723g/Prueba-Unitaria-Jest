const {fromDollarToYen , fromEuroToDollar , fromYenToPound} = require('../currency-exchange.js')

describe('Cambio de moneda', () => {
    test('Cambio de dolar a yen',() => {
        let valor = fromDollarToYen(2)
        expect(valor).toBe(14.2);
    });
    //comienza la prueba de cambio de euro a dolar
    test('Cmbio de euro a dolar' , function(){
        expect(fromEuroToDollar(6)).toBe(7.08)
    })
    //cambio de yen a libra esterlina
    test('Cambio de yen a libra esterlina', ()=> {
        expect(fromYenToPound(88)).toBe(0.44)
    })
})

