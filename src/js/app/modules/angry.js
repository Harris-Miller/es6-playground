
import Person from './person';

class Angry extends Person {
	constructor(first, last) {
		super(first, last);
	}

	speak() {
		console.log(`Yo mother fucker! I am ${this.first} ${this.last}`);
	}
}

export default Angry;