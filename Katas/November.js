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

function squaresNeeded(grains){
    if(grains <= 2){ return grains;}
    if(grains > 2) {
        let i = 0;
        while(2**i <= grains){
            i++;
        }
        return i;
    }
}
