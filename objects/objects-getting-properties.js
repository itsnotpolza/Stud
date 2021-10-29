const testObj = {
    prop1: 'property 1',
    prop2: 'property 2',
    prop3: 'property 3',
};

//Getting a certain property

console.log("\n--------------------------\n");

console.log("Getting a certain property\n");

console.log(testObj.prop1);
console.log(testObj['prop2']);
console.log(Object.getOwnPropertyDescriptor(testObj, 'prop3'));

console.log("\n--------------------------\n")

//Getting all properties except non-enumerable

console.log("Getting all properties except non-enumerable\n");

Object.defineProperty(testObj, 'prop4', { value: 'property 4' });
let properties = [];
for(let prop in testObj) {
    properties.push(prop);
}

console.log(Object.keys(testObj))
console.log(properties);

console.log("\n--------------------------\n")

console.log("Getting all properties including non-enumerable\n");

console.log(Object.getOwnPropertyNames(testObj));
console.log(Object.getOwnPropertyDescriptors(testObj));

console.log("\n--------------------------\n")
