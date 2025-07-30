// Number -> Boolean
// return true if the number is even if false otherwise
function isEven(n) {
    if (n < 0) {
        n = -n; // make n positive
    }
    if (n === 0) {
        return true; // base case: 0 is even
    }
    if (n === 1) {
        return false; // base case: 1 is odd
    }
    return isEven(n - 2); // recursive case: reduce n by 2
}