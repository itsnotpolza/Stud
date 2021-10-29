const testObj = {};

//Defining a property

//1 --- literal notation

testObj.literal = "literal";

//2 --- Object.defineProperty
//      with three non-required descriptors that are false by default??

//       -1- configurable - if set to false, the value can't be modified (changed or deleted)

Object.defineProperty(testObj, 'nonConfigurable', { value: 'can\'t change or delete', configurable: false, enumerable: true })

//       -2- writable - if set to false value can't be changed

Object.defineProperty(testObj, 'nonWritable',  { value: 'can\'t change', writable: false, enumerable: true, configurable: true })

//       -3- enumerable - if set to false, the property can't be iterated over

Object.defineProperty(testObj, 'nonEnumerable', { value: 'can\'t iterate', enumerable: false, configurable: true, writable: true })

//3 --- Object.defineProperties

Object.defineProperties(testObj, { regularProp: { value: "regular property", enumerable: true, configurable: true, writable: true } })

//testing descriptors

// -1-
testObj.nonConfigurable = "configurable";

console.log(testObj.nonConfigurable);

delete testObj.nonConfigurable;

console.log(testObj.nonConfigurable);

//-2-
testObj.nonWritable = "writable";

console.log(testObj.nonWritable);

//-3-
console.log(testObj.nonEnumerable);

for( key in testObj ) console.log(key);
