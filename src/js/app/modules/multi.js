
import { arithmetic } from './math';

var func1 = function() {
	return "I am func1";
};

var func2 = function(x, y) {
	return `I can do math! x = ${x}, y = ${y}, and x*y = ${arithmetic.multi(x,y)}!`;
};

export {
	func1,
	func2
};

export default function() {
	return "I am the default!";
} 	