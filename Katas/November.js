// Description:

// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".
//
// #Examples:
//
// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd
// input(222) => returns true
// input(5) => returns false
// input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// Note: The numbers will always be 0 or positive integers!


function isVeryEvenNumber(n) {
    return !n-- || n % 9 % 2 === 1;
}

// The wheat/rice and chessboard problem
// I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests
// wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1
// grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on,
// always doubling the previous.
// Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need
// to return up to which square of the chessboard one should count in order to get at least as many.

function squaresNeeded(grains) {
    let s = 0;
    while (2 ** s - 1 < grains) {
        s++;
    }
    return s;
}

//---------------------------------------------------------------

function squaresNeeded(grains) {
    if (grains <= 2) {
        return grains;
    }
    if (grains > 2) {
        let i = 0;
        while (2 ** i <= grains) {
            i++;
        }
        return i;
    }
}

// Powers of 3
// Given a positive integer N, return the largest integer k such that 3^k < N.
// For example,
// largest_power(3) == 0
// largest_power(4) == 1

function largestPower(n) {
    let k = 0;
    while (n > 0) {
        if (n <= 1) return k - 1;
        if (n <= 3) return k;
        n = n / 3;
        k++;
    }
    return k;
}

//----------------------------------------------------------

function largestPower(n) {
    for (i = 0; i < 999; i++)
        if (Math.pow(3, i) >= n)
            return i - 1;
}

// Next Prime
// Get the next prime number!
//You will get a numbern (>= 0) and your task is to find the next prime number.
//Make sure to optimize your code: there will numbers tested up to about 10^12.
// Examples
// 5   =>  7
// 12  =>  13

function nextPrime(n) {
    let count = 0;
    for (let i = n + 1; i > 0; i++) {
        if (isPrime(i)) {
            count = i;
            break
        }
    }
    return count
}

function isPrime(n) {
    let rt = Math.sqrt(n);
    for (let i = 2; i <= rt; i++) {
        if (n % i === 0) return false;
    }
    return n !== 1;
}

//-------------------------------------------------------
function nextPrime(n) {

    let m = n > 1 ? n + 1 : 2;

    for (let i = 2; i * i <= m; i++)
        if (m % i === 0)
            return nextPrime(m);

    return m;

}

//Ученик учит английские слова.

function englishWords(n) {
    let wordsEveryDay = 5;
    let words = 0;
    let days = 0;
    while (words < n) {
        words = words + wordsEveryDay;
        days++;
        wordsEveryDay += 2;
    }
    return days
}

// Найдите значение дроби
// question
// Дано число n > 0. Найдите значение дроби:
// fractional
// Напишите функцию с именем fractional, которая принимает число n и возвращает значение дроби. В решении используйте цикл for. Значение дроби округлите до трех десятичнных знаков.
// Примеры:
// функция fractional(1) должна возвратить 1; // 1 / 1 = 1
// функция fractional(2) должна возвратить 1.5; // 3 / 2 = 1.5
// функция fractional(3) должна возвратить 1. // 6 / 6 = 1
// функция fractional(4) должна возвратить 0.417. // 10 / 24 = 0.41666666... = 0.417

function fractional(n) {
    let sum = 0;
    let mult = 1;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    for (let i1 = 1; i1 <= n; i1++) {
        mult *= i1
    }
    return +(sum / mult).toFixed(3)
}

// Количество делителей числа.
// question
// Дано число n > 0. Найдите количество делителей этого числа. Делитель - это число, на которое данное число делится без остатка.
// Напишите функцию с именем numberOfDividers, которая принимает число n и возвращает количество делителей этого числа.
// Примеры:
// функция numberOfDividers(1) должна возвратить 1; // один делитель - число 1
// функция numberOfDividers(2) должна возвратить 2; // 2 делителя - числа 1 и 2
// функция numberOfDividers(3) должна возвратить 2; // 2 делителя - числа 1 и 3
// функция numberOfDividers(4) должна возвратить 3; // 3 делителя - числа 1, 2, 4
// функция numberOfDividers(12) должна возвратить 6. // 6 делителей - числа 1, 2, 3, 4, 6, 12

function numberOfDividers(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

// Создайте массив делителей
// Дано число n > 0. Найдите все делители этого числа. Делитель - это число, на которое данное число делится без остатка.
// Напишите функцию с именем dividers, которая принимает число n и возвращает делители этого числа в виде массива.
//
// Примеры:
// функция dividers(1) должна возвратить [1];
// функция dividers(2) должна возвратить [1, 2];
// функция dividers(3) должна возвратить [1, 3];
// функция dividers(4) должна возвратить [1, 2, 4];
// функция dividers(12) должна возвратить [1, 2, 3, 4, 6, 12].

function dividers(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            n % i;
            arr.push(i);
        }
    }
    return arr;
}

// Простое число.
// Дано число n > 0. Определите, является ли данное число n простым.
// Число называется простым, если оно делится только на 1 и на самого себя (т.е. число делителей числа равно 2). Например, числа 2, 3, 5, 5, 7, 11, 13, 17, 19 – простые. Число 1 не является ни простым, ни составным.
// Напишите функцию с именем isPrime, которая принимает число n и возвращает true, если число простое, и false - в противном случае.
// Примеры:
// функция isPrime(1) должна возвратить false;
// функция isPrime(2) должна возвратить true;
// функция isPrime(29) должна возвратить true;
// функция isPrime(30) должна возвратить false.

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    let root = Math.sqrt(n);
    for (let i = 2; i <= root; i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(1));

// Возведение в степень путем многократного умножения
// Не пользуясь операцией возведения в степень, возвести число a в степень n.

function power(a, n) {
    let prod = 1;
    for (let i = 1; i <= n; i++) {
        prod *= a;
    }
    return prod;
}

//Последовательность Фибоначчи

function fibonacciNumbers(n) {
    let arr = [0, 1,];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

//Count the divisors of a number

function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            n % i;
            count++
        }
    }
    return count;
}

// Find the divisors!
// Create a function named divisors/Divisors that takes an integer n > 1 and returns
// an array with all of the integer's divisors(except for 1 and the number itself), from smallest
// to largest. If the number is prime return the string '(integer) is prime'.

function divisors(integer) {
    let arr = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            arr.push(i);
        }
    }
    return arr.length ? arr : (integer + ' is prime');
}

//Grasshopper - Summation

var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

//Beginner Series #3 Sum of Numbers

function getSum(a, b) {
    var sum = 0;
    if (a === b) {
        return a;
    } else if (a < b) {
        for (var i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (var i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum
}

//Training JS #10: loop statement --for

function pickIt(arr) {
    let odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd, even];
}

//Sum of Multiples
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n, m) {
    let mult = 0;
    if (m < n || n === 0) {
        return "INVALID"
    }
    for (let i = n; i < m; i += n) {
        mult += i;
    }
    return mult
}

//Draw stairs

function drawStairs(n) {
    let str = "";
    for (let i = 1; i < n; i++) str = str + "I\n" + " ".repeat(i);
    return str + "I";
}

//Вклад в банк (простой процент)

function bankPercent(p){
    let years = 0;
    let invest = 1000;
    do {
        invest = invest + 1000/ 100 * p;
        years++;
    }
    while (invest < 1500)
    return years;
}

//Массив из цифр числа, записанных в обратном порядке.

function arrayOfDigits(n){
    let arr = [];
    do{
        arr.push(n%10)
        n = Math.floor(n/10)
    }while(n>0)
    return arr;
}

//Содержит ли число цифру "2"?

function doesNumberContain2(n){
    let arr = []
    do{
        arr.push(n%10)
        n = Math.floor(n/10)
        for(let i =0; i<arr.length; i++){
            if (arr[i]===2){
                return true
            }
        }
    }while(n>0)
    return false;
}


//Round up to the next multiple of 5

function roundToNext5(num) {
    let numCopy = num;

    while (numCopy % 5 !== 0) {
        numCopy++;
    }
    return numCopy;
}

//Training JS #9: loop statement --while and do..while
//https://www.codewars.com/kata/57216d4bcdd71175d6000560/javascript

function padIt(str,n){
    let res = str
    do {
        res =  (n % 2 === 0) ? res + "*" : "*" + res;
        n--;
    } while (n);
    return res;

}

// Определите, содержит ли массив заданное значение.
// Напишите функцию с именем isElementIncluded, которая принимает числовой массив arr и число x в качестве
// аргументов и возвращает true, если в массиве есть элемент x, и false в противном случае.
// В решении необходимо использовать оператор break.

function isElementIncluded(arr, x){
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] == x) {
            return true;
            break;
        }
    }
    return false;
}

// Содержит ли строка данный символ?
// Напишите функцию с именем iSymbInString, которая принимает строку str и символ symb
// в качестве аргументов и возвращает true, если в строке встречается хотя бы один символ symb,
// и false в противном случае.
// В решении необходимо использовать оператор break. Запрещено использование методов строк.
// Указание. Пройдите циклом по строке, и если встретится искомый символ, присвойте некоторой
// переменной значение true и выполните прерывание цикла.

function iSymbInString(str, symb){
    for (let i = 0; i <= str.length; i++){
        if (str[i] === symb){
            return true;
            break;
        }
    }
    return false
}

//Получить массив из четных чисел от 2 до n, за исключением чисел, кратных 3.

function fillArray(n){
    let arr = [];
    for (let i = 2; i <= n; i += 2){
        if ( i % 3 === 0){
            continue;
        }
        arr.push(i)
    }
    return arr
}




