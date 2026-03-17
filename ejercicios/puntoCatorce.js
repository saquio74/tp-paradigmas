export const factorial = (n) => {
    let acc = 1
    return factorialHelper(n, acc)
}

const factorialHelper = (n, acc) =>
    n === 1 ? acc : factorialHelper(n - 1, acc * n)
