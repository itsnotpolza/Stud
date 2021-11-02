//1 - literal notation
const testObj1 = {
    prop1: 'property 1',
    prop2: 'property 2',
    prop3: 'property 3',
};

//2 Object.create

// --- a. with Object.prototype

const testObj2A = Object.create(Object.prototype, { prop1: { value: 'prop 1' } });

console.log(Object.getOwnPropertyDescriptors(testObj2A));
console.log(Object.getPrototypeOf(testObj2A));

// --- b. with another object

const testObj2B = Object.create(testObj1, { prop4: { value: 'prop 4' } });

console.log(Object.getOwnPropertyDescriptors(testObj2B));
console.log(Object.getPrototypeOf(testObj2B));

//3 new operator

const drink = function(hasSugar) {
    this.makesHappy = hasSugar;
    this.doesThisMakeMeHappy = () => this.makesHappy ? console.log('yes!!!') : console.log('no...');
}

const water = new drink();
water.doesThisMakeMeHappy();
const fanta = new drink(true);
fanta.doesThisMakeMeHappy();

