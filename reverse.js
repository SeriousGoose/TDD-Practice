function reverse(string) {

    string = string.toString()
    let reversed = []
    let split = string.split('');
    for (i = 0; i < string.length; i++) {
        reversed.push(split.splice([split.length - 1], [1]))
    }
    reversed = reversed.join('')

    if (/\d/.test(reversed)) {
        reversed = parseInt(reversed);
    }

    return reversed;
}

module.exports = reverse;