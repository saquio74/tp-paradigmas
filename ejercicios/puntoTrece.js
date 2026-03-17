export const sumarHasta = (n) => {
    let acumulador = 0

    return sumarFactorial(n, acumulador)
}

const sumarFactorial = (n, acc) =>
    n === 0 ? acc : sumarFactorial(n - 1, acc + n)
