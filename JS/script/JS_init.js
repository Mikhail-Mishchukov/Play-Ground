// Function has to get value and which type to convert
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
const value = 2;
console.log(checkIncrementWorks(value, 'Post'));

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
//https://learn.javascript.ru/ifelse
