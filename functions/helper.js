function randomize(array) {
    let index = (Math.floor(Math.random() * array.length))
    return array[index]
}
function multi_randomize(array) {
    let string = ""
    for (arrays in array) {
        string += randomize(arrays)
    }
    return string
}

module.exports.randomize = randomize
module.exports.multi_randomize = multi_randomize