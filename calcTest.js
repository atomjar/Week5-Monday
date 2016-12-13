
let assert = require('assert')
let deepEqual = require('chai').deepEqual
let isTrue = require('chai').isTrue
let sum = require('../../src/js/calc').sum
let factorial = require('../../src/js/calc').fact
let evenNumberChecker = require('../../src/js/calc').even


describe('sum', function (){
  it('should return the sum of the array of numbers', function (){
    let a = [1,2,3]
    b = sum(a)

    assert.equal(b, 6)
    })
})


describe('factorial', function (){
  it('should return the factorial of given number', function (){
    let total = factorial(5)

    assert.deepEqual(total, 120)
    })
})

// describe('evenNumberChecker', function(){
//   it('should produce an even number', function (){
//     let number = evenNumberChecker(8)
//
//     assert.isTrue(number, true)
//
//   })
// })
