function add(a, b) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let array1 = [a, b]
    let answer = array1.reduce(reducer)
    return answer
}

function subtract(a, b) {
    const reducer = (accumulator, currentValue) => accumulator - currentValue;
    let array1 = [a, b]
    let answer = array1.reduce(reducer)
    return answer;
}

function multiply(...args) {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    let answer = args.reduce(reducer)
    return answer;
}

function divide(...args) {
    const reducer = (accumulator, currentValue) => accumulator / currentValue;
    let answer = args.reduce(reducer)
    return answer;
}

module.exports = { add, subtract, multiply, divide }