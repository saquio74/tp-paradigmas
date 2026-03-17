let acumulador = 0
export const sumarFactorialSingle = (n) => {
    if (n === 0) {
        const aux = acumulador
        acumulador = 0
        return aux
    }
    acumulador = acumulador + n
    return sumarFactorialSingle(n - 1)
}

//Version 2 por ahí un poco mas legible
export const sumarHasta = (n) => {
    let acumulador = 0
    return sumarFactorial(n, acumulador)
}

const sumarFactorial = (n, acc) =>
    n === 0 ? acc : sumarFactorial(n - 1, acc + n)
