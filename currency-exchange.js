function fromDollarToYen(montoDolares) {
    return montoDolares * 7.10
}

function fromEuroToDollar(montoEuros){
    return montoEuros * 1.18
}

function fromYenToPound(montoYen){
    return montoYen * 0.0050
}

module.exports = {
    fromDollarToYen, fromEuroToDollar, fromYenToPound
}