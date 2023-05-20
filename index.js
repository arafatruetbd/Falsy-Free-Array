const arr = [0, false, null, undefined, '', 1, 2, 'hello'];


//Solution 1
const filteredArrray1 = arr.filter(Boolean);

console.log(filteredArrray1);

//Solution 2
const filteredArrray2 = arr.filter(function (element) {
	return !!element;  // Double negation to convert value to boolean
});

console.log(filteredArrray2);

//Solution 3
const filteredArrray3 = [];
for (const element of arr) {
	if (element) {
		filteredArrray3.push(element);
	}
}

console.log(filteredArrray3);

//Solution 4

const filteredArrray4 = arr.reduce((result, value) => {
	if (value) {
		result.push(value);
	}
	return result
}, [])

console.log(filteredArrray4);