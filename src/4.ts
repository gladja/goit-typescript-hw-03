
class Key {
    constructor( private signature: number) {
    this.signature =  Math.random();
    }

    getSignature() {
        return this.signature
    }
}

class Person extends Key{
    constructor(signature: number, key: number) {
        super(signature)
        // this.key = signature
    }

    getKey(key) {
        return key
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};