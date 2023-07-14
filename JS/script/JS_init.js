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

//https://learn.javascript.ru/ifelse

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

// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

export function getPrimeNumbers(toNumber) {
    if (!toNumber && typeof toNumber !== 'number' && toNumber < 2) return null;

    const result = [];

    for (let i = 2; i < toNumber; i++) {
        let dividerCount = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) ++dividerCount;
            if (dividerCount > 1) {
                break;
            }
        }
    }
}
