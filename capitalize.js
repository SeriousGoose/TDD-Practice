function capitalize(string) {


    if (/\d/.test(string)) {
        return ("Not a String")

    } else {
        string = string.toLowerCase()
        let split = string.split('');
        split[0] = split[0].toUpperCase()
        let join = split.join('');
        return join;
    }
}

module.exports = capitalize;