import TestClass from '../src/js/testClass'
var expect = require('chai').expect

const testing = new TestClass()

describe("constructor", function() {

    it('should return false', function () {
        const val = false
        expect(val).to.be.false
    })

});
