
class Person {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	speak() {
		console.log(`Hi! I am ${this.first} ${this.last}`);
	}
}

export default Person;