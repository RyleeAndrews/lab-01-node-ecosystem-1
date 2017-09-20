'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');



describe('Arithmetic', function(){
  it('should return a number', function(){
    let result = arithmetic.add(3,4);
    expect(result).toEqual(7);
  });
  it('should return a number', function(){
    let result = arithmetic.sub(3,1);
    expect(result).toEqual(2);
  });
  it('should return null if input is a non number', function(){
    let result = arithmetic.add(2, 'hello');
    expect(result).toBe(null);
  });
});
