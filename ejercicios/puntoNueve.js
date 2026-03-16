const pipe3 = (f, g, h) => (x) => f(g(h(x)))

const sumar10 = (n) => n + 10
const duplicar = (n) => n * 2
const esMayorA30 = (n) => n > 30

export const revisar = pipe3(esMayorA30, sumar10, duplicar)
