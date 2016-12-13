/**
 * Adds whatever numbers are provided and returns the total
 * @param  {Array} numbers  The numbers to add together
 * @return {Number}         The total of all numbers
 */
module.exports.sum = function sum(numbers) {
    var total = 0;

    if (!numbers) {
        return total;
    }

    numbers.forEach(function addThem(num) {
        total += num;
    });
    return total
}

/**
 * Returns the factorial for the given number which is defined as:
 *    1 * 2 * 3 * ... * topNumber
 *    For example, if the number is 5, the factorial would be:
 *    1 * 2 * 3 * 4 * 5 = 120
 * @param  {Number} topNumber  The number to get the factorial value for
 * @return {Number}            The final factorial value
 */
module.exports.fact = function factorial(topNumber) {
    var i;
    var total = 1;

    if (typeof(topNumber) !== 'number') {
        return 0;
    }

    for (i = 1; i <= topNumber; i++) {
        total *= i;
    }
    return total;
}


// module.exports.even = function evenNumberChecker(number) {
//     var number
//     if (number % 2 === 0) {
//         return true
//     } else {
//         return "not an even number"
//     }
// }
