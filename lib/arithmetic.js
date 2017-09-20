'use strict';

const arithmetic = module.exports = {};

module.exports.add = (a,b) => {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }else{return null;}
};


module.exports.sub = (a,b) => {return a - b;};
