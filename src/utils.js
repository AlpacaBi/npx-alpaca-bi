/**
* Sleep seconds
 * @param {Number} time 
 * @returns {Promise<void>}
 */
const sleep = time => new Promise( resolve => setTimeout(resolve, time * 1000) )

/**
 * Repeats the given string n times
 * @param {Number} n
 * @param {String} str
 * @returns {String}
 */
const repeat =(n, str) => Array(n).fill(str).join('');

/**
 * Clear screen & scroll back buffer
 */
const clearScreen = () => {
    process.stdout.write('\u001b[3J\u001b[2J\u001b[1J');
    console.clear();
}


module.exports = {
    sleep,
    repeat,
    clearScreen
};