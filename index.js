import { acumular } from './ejercicios/puntoDoce.js'
import { aplicar } from './ejercicios/puntoCinco.js'
import { generarMensaje, saludar } from './ejercicios/puntoCuatro.js'
import { por2, por5 } from './ejercicios/puntoDiez.js'
import { calcularIva } from './ejercicios/puntoDos.js'
import { revisar } from './ejercicios/puntoNueve.js'
import { gritar } from './ejercicios/puntoOcho.js'
import { saludoFormal, saludoInformal } from './ejercicios/puntoOnce.js'
import { aplicarDosVeces } from './ejercicios/puntoSeis.js'
import { compuesto } from './ejercicios/puntoSiete.js'
import { normalizarTexto } from './ejercicios/puntoTres.js'
import { esPar, sumarDos, triplicar } from './ejercicios/puntoUno.js'
import { sumarHasta } from './ejercicios/puntoTrece.js'
import { factorial } from './ejercicios/puntoCatorce.js'

console.log(
    'Punto uno:\n',
    `- esPar(11): ${esPar(11)}\n`,
    `- sumarDos(8): ${sumarDos(8)}\n`,
    `- triplicar(4): ${triplicar(4)}\n`,
)

console.log(
    'Punto dos:\n',
    `- calcularIva(1000): ${calcularIva(1000)}\n`,
    `- calcularIva(2550): ${calcularIva(2550)}\n`,
    `- calcularIva(9999): ${calcularIva(9999)}\n`,
)

console.log(
    'Punto tres:\n',
    `- normalizarTexto(1000): ${normalizarTexto(1000)}\n`,
    `- normalizarTexto(  jUaN   ): ${normalizarTexto('  jUaN   ')}\n`,
    `- normalizarTexto(   mARÍA   ): ${normalizarTexto('   mARÍA   ')}\n`,
)

console.log(
    'Punto cuatro:\n',
    `- saludar(Ana): ${saludar('Ana')}\n`,
    `- generarMensaje(Luis): ${generarMensaje('Luis')}`,
)

console.log(
    'Punto cinco:\n',
    `- aplicar(n => n * 2, 5): ${aplicar((n) => n * 2, 5)}\n`,
    `- aplicar(n => (n + 100) * 3, 2): ${aplicar((n) => (n + 100) * 3, 2)}\n`,
    `- aplicar(n => n > 100, 120): ${aplicar((n) => n > 100, 120)}\n`,
)

console.log(
    'Punto seis:\n',
    `- aplicarDosVeces(n => n + 5, 10) : ${aplicarDosVeces((n) => n + 5, 10)}\n`,
    `- aplicarDosVeces(texto => texto + "!", "hola"): ${aplicarDosVeces((texto) => texto + '!', 'hola')}\n`,
)

console.log(
    'Punto siete:\n',
    `- compuesto(4): ${compuesto(4)}\n`,
    `- compuesto(10): ${compuesto(10)}\n`,
)

console.log(
    'Punto ocho:\n',
    `- gritar("   hola mundo   "): ${gritar('   hola mundo   ')}\n`,
)

console.log(
    'Punto 9:\n',
    `- revisar(4): ${revisar(4)}\n`,
    `- revisar(6): ${revisar(6)}\n`,
    `- revisar(11): ${revisar(11)}\n`,
)

console.log('Punto 10:\n', `- por2(7): ${por2(7)}\n`, `- por5(4): ${por5(4)}`)

console.log(
    'Punto 11:\n',
    `- saludoInformal("Carla"): ${saludoInformal('Carla')}\n`,
    `- saludoFormal("Pedro"): ${saludoFormal('Pedro')}`,
)

console.log(
    'Punto 12:\n',
    `- acumular(5): ${acumular(5)}\n`,
    `- acumular(3): ${acumular(3)}\n`,
    `- acumular(10): ${acumular(10)}`,
)

console.log(
    'Punto 13:\n',
    `- sumarHasta(5): ${sumarHasta(5)}\n`,
    `- sumarHasta(8): ${sumarHasta(8)}`
)

console.log(
    'Punto 14:\n',
    `- sumarHasta(5): ${factorial(5)}\n`,
    `- sumarHasta(1): ${factorial(1)}`
)
