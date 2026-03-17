const crearEscalador = (factor) => (value) => value * factor
const sumar8 = (numero) => numero + 8
const esMayorA40 = (numero) => numero > 40
const por5 = crearEscalador(5)

export const revisarIntegrador = (numero) => esMayorA40(sumar8(por5(numero)))
