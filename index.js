import { aplicar } from './ejercicios/puntoCinco.js'
import { generarMensaje, saludar } from './ejercicios/puntoCuatro.js'
import { calcularIva } from './ejercicios/puntoDos.js'
import { normalizarTexto } from './ejercicios/puntoTres.js'
import { esPar, sumarDos, triplicar } from './ejercicios/puntoUno.js'

console.group(
    'Punto uno:`\n',
    `- esPar(11) ${esPar(11)}\n`,
    `- sumarDos(8) ${sumarDos(8)}\n`,
    `- triplicar(4) ${triplicar(4)}\n`,
)

console.group(
    'Punto dos:`\n',
    `- calcularIva(1000) ${calcularIva(1000)}\n`,
    `- calcularIva(2550) ${calcularIva(2550)}\n`,
    `- calcularIva(9999) ${calcularIva(9999)}\n`,
)

console.group(
    'Punto tres:`\n',
    `- normalizarTexto(1000) ${normalizarTexto(1000)}\n`,
    `- normalizarTexto(2550) ${normalizarTexto('  jUaN   ')}\n`,
    `- normalizarTexto(2550) ${normalizarTexto('   mARÍA   ')}\n`,
)

console.group(
    'Punto cuatro: \n',
    `- saludar(Ana) ${saludar('Ana')}\n`,
    `- generarMensaje(Luis) ${generarMensaje('Luis')}`,
)

console.group(
    'Punto cinco:`\n',
    `- aplicar(n => n * 2, 5) ${aplicar((n) => n * 2, 5)}\n`,
    `- aplicar(n => (n + 100) * 3, 2) ${aplicar((n) => (n + 100) * 3, 2)}\n`,
    `- aplicar(n => n > 100, 120) ${aplicar((n) => n > 100, 120)}\n`,
)
