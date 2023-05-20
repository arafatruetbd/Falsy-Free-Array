### List of falsy value

In JavaScript, the following values are considered falsy:

1. `false`: The boolean value `false`.
2. `0`: The number zero (numeric zero).
3. `''` or `""`: An empty string.
4. `null`: The absence of any value.
5. `undefined`: A variable that has been declared but has not been assigned a value.
6. `NaN`: Not-a-Number, which represents an invalid or unrepresentable value in numeric operations.

These values are considered falsy because they evaluate to `false` when used in a boolean context. Any other value that is not explicitly falsy is considered truthy.


### how to remove falsy value from array

To remove falsy values from an array in JavaScript, you can use various approaches. Here are a few methods you can use:

1. Using `Array.prototype.filter()`:
```javascript
const arr = [0, false, null, undefined, '', 1, 2, 'hello'];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr); // Output: [1, 2, 'hello']
```
In this approach, the `filter()` method is called on the array and passed a callback function. The callback function uses the `Boolean` constructor as the predicate, which filters out any falsy values from the array.

2. Using a `for...of` loop:
```javascript
const arr = [0, false, null, undefined, '', 1, 2, 'hello'];

const filteredArr = [];
for (const value of arr) {
  if (value) {
    filteredArr.push(value);
  }
}

console.log(filteredArr); // Output: [1, 2, 'hello']
```
In this approach, a `for...of` loop is used to iterate over the array. Each value is checked using an `if` statement, and only truthy values are added to the `filteredArr` using the `push()` method.

3. Using `Array.prototype.reduce()`:
```javascript
const arr = [0, false, null, undefined, '', 1, 2, 'hello'];

const filteredArr = arr.reduce((result, value) => {
  if (value) {
    result.push(value);
  }
  return result;
}, []);

console.log(filteredArr); // Output: [1, 2, 'hello']
```
In this approach, the `reduce()` method is used to iterate over the array. The callback function checks each value and adds truthy values to the `result` array.

All of these approaches will remove falsy values from the array and return a new array containing only truthy values.