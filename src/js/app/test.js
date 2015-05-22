
import { arithmetic } from './modules/math';
import message from './modules/multi';
import { func1, func2 } from './modules/multi';
import Angry from './modules/angry';
import _ from 'lodash';

console.log(arithmetic.add(3,5));

console.log(message());

console.log(func2(4,6));

var lodash_test = _.map([1, 2, 3], function(n) { return n * 3; });
console.log('lodash test: ', lodash_test);

var test = new Angry('harris', 'miller');

export default test;