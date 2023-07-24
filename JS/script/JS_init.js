export function typeConvert(value, type) {
    switch (type) {
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
        case 'boolean':
            return Boolean(value);
    }
}

export function checkIncrementWorks(counter, type) {
    if (counter && typeof counter === 'number') {
        switch (type) {
            case 'Pref':
                return ++counter;
            case 'Post':
                return counter++;
            default:
                return 0;
        }
    }
    return 0;
}
// const value = 2;
// console.log(checkIncrementWorks(value, 'Post'));

export function isFirstValueBiggerThanSecondValue(value1, value2) {
    if (
        value1 &&
        typeof value1 === 'number' &&
        value2 &&
        typeof value2 === 'number'
    ) {
        return value1 > value2;
    }
    return false;
}

export function checkOfficialJavaScriptName(value) {
    if (!value || typeof value !== 'string') {
        return null;
    }

    if (value === 'ECMAScript') return 'Correct';

    return 'ECMAScript';
}

export function compareNumberWithZero(value) {
    if (!value || typeof value !== 'number') {
        return null;
    }

    if (value > 0) {
        return 1;
    }
    if (value < 0) {
        return -1;
    }

    return 0;
}

export function checkPassword(value) {
    if (!value || typeof value !== 'number') {
        return null;
    }

    if (value === 'I am the boss') return 'Hello!';

    return 'The password is wrong';
}

export function returnHalfCoordinate(maxCoordinate) {
    if (typeof maxCoordinate !== 'number' && !number) return null;
    const result = [];
    externalCycle: for (let i = 0; i < maxCoordinate; i++) {
        for (let j = 0; j < maxCoordinate; j++) {
            if (i > maxCoordinate / 2) break externalCycle;

            if (j > maxCoordinate / 2) break;

            result.push(`${i} ${j}`);
        }
    }

    return result;
}

export function inputNumberGreaterThan100(value) {
    if (typeof value !== 'number' && !number) return null;

    while (value < 100) {
        value = prompt();
        if (value > 100) break;
    }
}

//Algorithm can be optimized: Quadratic sieve algorithm, General number field sieve,

export function getPrimeNumbers(toNumber) {
    if (typeof toNumber !== 'number' || toNumber < 2) return null;

    const result = [];

    primaryCycle: for (let i = 2; i <= toNumber; i++) {
        for (let j = 2; j < Math.sqrt(i); j++) {
            if (i % j === 0) continue primaryCycle;
        }

        result.push(i);
    }

    return result;
}

export function min(a, b) {
    return a > b ? b : a;
}

const pow = function (x, n) {
    if (x === 0) return 0;

    if (n > 0) {
        return x ** n;
    }

    return 1 / x ** Math.abs(n);
};

/**Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined. */
/**
Example 1:
 
Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. 
However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
 */
function checkIfInstanceOf(obj, classFunction) {
    if (typeof obj === 'object') return obj instanceof classFunction;
    console.log('obj', typeof obj);
    if (typeof obj === 'number')
        return classFunction.constructor.name === 'Number';
    console.log('obj', typeof obj);

    return;
}

console.log('Number', typeof Number);
class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));
console.log(checkIfInstanceOf(new Date(), Date));
console.log(checkIfInstanceOf(5, Number));
