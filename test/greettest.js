'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe('Greet', function(){
  it('should return hello and name', function(){
    let result = greet('world');
    expect(result).toBe('hello world');
  });
  it('should return null if input is not a string', function(){
    let result = greet(1);
    expect(result).toBe(null);
  });
});
