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
//https://learn.javascript.ru/function-basics

export function min(a, b) {
    return a > b ? b : a;
}
export function pow(x, n) {
    if (n < 1) return null;
    return x ** n;
}
