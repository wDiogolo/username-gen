const words = require("./word.json")



/**
 * @param {number} max max length of username, default: 8
 * @param {boolean} space allows space or not, default: false
 */
function generateUsername(max = 8, space = false) {
    if (max < 6) return TypeError("max value must be greater than 6")
    const generatedUsrn = max >= 10 ? getRandomWord() + getRandomSpace(space) + getRandomWord() : getRandomWord() 
    return generatedUsrn.slice(0, max-2) + getRandomNumber().toString()
}

function getRandomWord() {
    let dic = Object.keys(words)[Math.floor(Math.random()*Object.keys(words).length)]
    return words[dic][Math.floor(Math.random()*words[dic].length)]
}

function getRandomSpace(space) {
    const spaces = space == true ? ["-", "_", " ", ""] : ["-", "_", ""] 
    return spaces[Math.floor(Math.random()*spaces.length)]
}

function getRandomNumber() {
    return Math.floor(Math.random()*(99 - 10)+10)
}

module.exports.generateUsername = generateUsername