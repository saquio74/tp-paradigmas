export const normalizarTexto = (t) => {
    if (typeof t !== 'string' || !t.length) {
        return 'No parece un texto'
    }

    return capitalizarTexto(quitarEspacios(t))
}

const quitarEspacioInicial = (t) =>
    t[0] === ' ' ? quitarEspacioInicial(t.slice(1)) : t
const quitarEspacioFinal = (t) =>
    t[-1] === ' ' ? quitarEspacioFinal(t.slice(0, -1)) : t

export const quitarEspacios = (t) => quitarEspacioInicial(quitarEspacioFinal(t))

const capitalizarTexto = (t) => {
    if (typeof t !== 'string' || !t.length)
        return console.log('No parece un texto')
    return t[0].toUpperCase() + t.slice(1).toLocaleLowerCase()
}
