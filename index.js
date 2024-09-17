// 1 
function calculateDifference(a, b) {
    return a - b;
}

// 2 
function isOdd(num) {
    return num % 2 !== 0;
}

// 3
function findMin(arr) {
    return Math.min(...arr);
}

// 4
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

//5
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}


//6
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1);
}


//7
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}


//8
function findAverage(arr) {
    if (arr.length === 0) return 0; 
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}


console.log("1. Difference between the 1st and 2nd argument.:", calculateDifference(120, 55)); 
console.log("2. Is the number odd?", isOdd(8)); 
console.log("3. Smallest number in the array: ", findMin([100,34,0,20,1,40]));
console.log("4. An array containing only the even numbers:", filterEvenNumbers([3, 1, 2, 9, 5, 7]));
console.log("5. Sort array in descending order:", sortArrayDescending([77,109,89,50,54])); 
console.log("6. Lowercase first letter of:", lowercaseFirstLetter(`Asha`)); 
console.log("7. Count vowels in words:", countVowels(`I am Bangladeshi`)); 
console.log("8. Average of all elements", findAverage([10,23,45,34,109])); 
