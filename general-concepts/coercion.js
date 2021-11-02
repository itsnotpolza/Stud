const coercibleObj = {
    numericValue: 25,
    valueOf: function() { return this.numericValue },
    toString: function() { return `numeric value is ${this.numericValue}` }
}

console.log('' + coercibleObj); //does not coerce into a string :(

console.log(+coercibleObj);

console.log('' + [coercibleObj]); // coerces into a string

const stringCoercible = {
    stringValue: "age",
    numericValue: 25,
    toString: function() { return `${this.stringValue} is ${this.numericValue}` }
}

console.log(''+stringCoercible);
