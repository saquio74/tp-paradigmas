const crearAcumulador = (inicial) => {
    let acumulador = inicial
    return (n) => (acumulador = acumulador + n)
}

export const acumular = crearAcumulador(10)
