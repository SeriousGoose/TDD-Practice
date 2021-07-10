function caesar(word, move) {
    let characterCodes = []
    let adjusted = [];
    let cypher = [];

    if (move > 26) {
        let x = Math.floor(move / 26)
        move = move - (x * 26);
    }

    if (/\b[^\d\W]+\b/g.test(word)) {
        let split = word.split('');

        split.forEach(element => {
            characterCodes.push(element.charCodeAt(0))
        })

        characterCodes.forEach(element => {
            changeLetters(element, adjusted, move);
        })

        adjusted.forEach(element => {
            cypher.push(String.fromCharCode(element))
        })

        cypher = cypher.join('');
        return (cypher)
    } else { return "Not a word" }
}


function changeLetters(element, adjusted, move) {

    if (element >= 97 && element <= 122) {
        element = element + move;
        if (element >= 123) {
            element = element - 26;
        }
        adjusted.push(element)
    }
    else if (element >= 65 && element <= 90) {
        element = element + move;
        if (element >= 91) {
            element = element - 26
        }
        adjusted.push(element)

    }
    else if (element == 32) {
        adjusted.push(element)
    }
}

module.exports = caesar;