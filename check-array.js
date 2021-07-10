function average(...args) {
    let length = args[0].length;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let cumulative = args[0].reduce(reducer)
    let answer = cumulative / length;
    return answer;
}

function minimum(...args){
    let value = args[0][0];

   args[0].forEach(element => {
        if(element <= value){
            value = element;
        }
    })
    return value;
}

function maximum(...args){
    let value = args[0][0];

   args[0].forEach(element => {
        if(element >= value){
            value = element;
        }
    })
    return value;
}

function findLength(...args){
    let length = args[0].length
    return length;
}

function isValid(element){
    return (Number.isInteger(element))
}


function generateObject(array){

    if(array.every(isValid)){

    let object = {
        average: average(array),
        min: minimum(array),
        max: maximum(array),
        length: findLength(array)
    }

    return object;
    }
    else{
        return "Not Valid Array"
    }
}

module.exports = {average, minimum, maximum, findLength, generateObject}
