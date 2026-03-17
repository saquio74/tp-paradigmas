let acumulador = 0
let isNegative = false
let exponenteAux
export const potencia = (base, exponente) => {
    isNegative = exponente < 0 || isNegative
    exponenteAux = exponente < 0 ? exponente * -1 : exponente
    if (exponenteAux === 0) return 1
    if (exponenteAux === 1) {
        const auxAcum = isNegative ? 1 / acumulador : acumulador
        acumulador = 0
        isNegative = false

        return auxAcum
    }
    if (acumulador === 0) acumulador = base
    acumulador = acumulador * base
    return potencia(base, exponenteAux - 1)
}
