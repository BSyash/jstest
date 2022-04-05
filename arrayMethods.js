// concat() return new array
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log('concat() -> ', array1.concat(array2));

// copyWithin() copy the element from array and set element
console.log('copyWithin() -> ', array1.copyWithin(0, 2));

// entries() returns a new Array Iterator object that contains the key/value pairs for each index
console.log('entries() -> ', array1.entries());

// every() It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log('every() -> ', [1, 30, 39, 29, 10, 13].every(isBelowThreshold));

// fill()  returns the modified array.
console.log('fill() -> ', [1, 2, 3, 4].fill(0, 2, 4));

// filter()  return new array with all elements that pass the test implemented by the provided function.
console.log('filter() -> ', ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(word => word.length > 6));

// find() returns the value of the first element in the provided array 
console.log('find() -> ', [5, 12, 8, 130, 44].find(element => element > 10));

// findIndex() returns the index of the first element in the array that satisfies the provided testing function
console.log('findIndex() -> ', [5, 12, 8, 130, 44].findIndex((element) => element > 13));

//flat()  creates a new array with all sub-array elements
console.log('flat() -> ', [0, 1, 2, [[[3, 4]]]].flat(2));

// forEach() 
['a', 'b', 'c'].forEach(element => console.log('forEach() ->', element));

// from()
console.log('from() -> ', Array.from([1, 2, 3], x => x + x));

// includes() returning true or false as appropriate.
console.log('includes() -> ', [1, 2, 3].includes(2, 0));

// indexOf()
console.log('indexOf() -> ', ['ant', 'bison', 'camel', 'duck', 'bison'].indexOf('camel', 1));

// isArray()
console.log('isArray() -> ', Array.isArray([1, 2, 3]));

// join()  returns a new string by concatenating all of the elements in an array 
console.log('join() -> ', ['Fire', 'Air', 'Water'].join());

// keys() returns a new Array Iterator object that contains the keys for each index in the array.
console.log('keys() -> ', ['a', 'b', 'c'].keys());

// lastIndexOf() returns the last index at which a given element can be found in the array,
console.log('lastIndexOf() -> ', ['Dodo', 'Tiger', 'Penguin', 'Dodo'].lastIndexOf('Penguin', 1));

// map() creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log('map() -> ', [1, 4, 9, 16].map(x => x * 2));

// of() creates a new Array instance from a variable number of arguments
console.log('of() -> ', Array.of(7));

// pop() removes the last element from an array and returns that element.
console.log('pop() -> ', ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'].pop());

// push()
console.log('push() -> ', ['pigs', 'goats', 'sheep'].push('cows'));

// reduce()
console.log('reduce() -> ', [1, 2, 3, 4].reduce((previousValue, currentValue) => previousValue + currentValue, 0));

// reduceRight() function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
console.log('reduceRight() -> ', [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
));

// reverse()
console.log('reverse() -> ', ['one', 'two', 'three'].reverse());

// shift() removes the first element from an array and returns that removed element.
console.log('shift() -> ', ['one', 'two', 'three'].shift());

// slice()  returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
console.log('slice() -> ', ['ant', 'bison', 'camel', 'duck', 'elephant'].slice(2, 4));

// some() provided function returns true; otherwise it returns false
console.log('some() -> ', [1, 2, 3, 4, 5].some(item => item % 2 === 0));

// sort() sorts the elements of an array in place and returns the sorted array.
console.log('sort() -> ', ['March', 'Jan', 'Feb', 'Dec'].sort());

// splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const months = ['Jan', 'March', 'April', 'June']
months.splice(1,2,'Feb')
console.log('splice() -> ', months);

// toLocaleString() returns a string representing the elements of the array
console.log('toLocaleString() -> ', [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')].toLocaleString());

