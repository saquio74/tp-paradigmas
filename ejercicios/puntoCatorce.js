let acc = 1
export const factorialSingle = (n) => {
    if (n < 1) return n
    if (n === 1) {
        let resp = acc
        acc = 1
        return resp
    }
    acc = acc * n
    return factorialSingle(n - 1, acc)
}

export const factorial = (n) => {
    if (n <= 1) return n
    return factorialHelper(n, acc)
}

const factorialHelper = (n, acc) =>
    n === 1 ? acc : factorialHelper(n - 1, acc * n)
