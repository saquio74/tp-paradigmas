const crearSaludo = (saludoBase) => (nombre) => `${saludoBase} ${nombre}`

export const saludoFormal = crearSaludo('Buenos días,')
export const saludoInformal = crearSaludo('Hola')