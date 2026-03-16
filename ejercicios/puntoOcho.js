import { normalizarTexto, quitarEspacios } from './puntoTres.js'

const pipe2 = (fn, fn1) => fn(fn1)
export const gritar = pipe2(quitarEspacios, normalizarTexto)
