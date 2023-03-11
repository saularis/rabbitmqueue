let assert = require('assert');
const helper = require('../src/helper');
describe('Helpers', function() {
    describe('IsObject', function() {
        it('should return true if object is an object', function() {
            assert.equal(true, helper.isObject({}));
        });

        it('should return false if string is not an object', function() {
            assert.equal(false, helper.isObject(''));
        });

        it('should return false if number is not an object', function() {
            assert.equal(false, helper.isObject(1));
        });

        it('should return false if array is not an object', function() {
            assert.equal(false, helper.isObject([]));
        });

        it('should return false if boolean is not an object', function() {
            assert.equal(false, helper.isObject(true));
        });

        it('should return false if null is not an object', function() {
            assert.equal(false, helper.isObject(null));
        });

        it('should return false if undefined is not an object', function() {
            assert.equal(false, helper.isObject(undefined));
        });

        it('should return false if function is not an object', function() {
            assert.equal(false, helper.isObject(function() {}));
        });

        it('should return false if symbol is not an object', function() {
            assert.equal(false, helper.isObject(Symbol()));
        });

        it('should return false if date is not an object', function() {
            assert.equal(false, helper.isObject(new Date()));
        });

        it('should return false if regexp is not an object', function() {
            assert.equal(false, helper.isObject(new RegExp()));
        });

        it('should return false if error is not an object', function() {
            assert.equal(false, helper.isObject(new Error()));
        });
    });

    describe('IsArray', function() {
        it('should return true if array is an array', function() {
            assert.equal(true, helper.isArray([]));
        });

        it('should return false if string is not an array', function() {
            assert.equal(false, helper.isArray(''));
        });

        it('should return false if number is not an array', function() {
            assert.equal(false, helper.isArray(1));
        });

        it('should return false if object is not an array', function() {
            assert.equal(false, helper.isArray({}));
        });

        it('should return false if boolean is not an array', function() {
            assert.equal(false, helper.isArray(true));
        });

        it('should return false if null is not an array', function() {
            assert.equal(false, helper.isArray(null));
        });

        it('should return false if undefined is not an array', function() {
            assert.equal(false, helper.isArray(undefined));
        });

        it('should return false if function is not an array', function() {
            assert.equal(false, helper.isArray(function() {}));
        });

        it('should return false if symbol is not an array', function() {
            assert.equal(false, helper.isArray(Symbol()));
        });

        it('should return false if date is not an array', function() {
            assert.equal(false, helper.isArray(new Date()));
        });

        it('should return false if regexp is not an array', function() {
            assert.equal(false, helper.isArray(new RegExp()));
        });

        it('should return false if error is not an array', function() {
            assert.equal(false, helper.isArray(new Error()));
        });
    });

    describe('GetObjectKeys', function() {
        it('should return array of keys if object is an object', function() {
            assert.deepEqual(['a', 'b'], helper.getObjectKeys({a: 1, b: 2}));
        });

        it('should return empty array if string is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(''));
        });

        it('should return empty array if number is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(1));
        });

        it('should return empty array if array is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys([]));
        });

        it('should return empty array if boolean is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(true));
        });

        it('should return empty array if null is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(null));
        });

        it('should return empty array if undefined is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(undefined));
        });

        it('should return empty array if function is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(function() {}));
        });

        it('should return empty array if symbol is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(Symbol()));
        });

        it('should return empty array if date is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(new Date()));
        });

        it('should return empty array if regexp is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(new RegExp()));
        });

        it('should return empty array if error is not an object', function() {
            assert.deepEqual([], helper.getObjectKeys(new Error()));
        });
    });
});
