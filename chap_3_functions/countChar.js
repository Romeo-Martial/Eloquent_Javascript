// String -> Number
// returns the number of uppercase B characters in the string 
function countBs(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC") === 2); // 2
console.log(countBs("BaaBaaB") === 3); // 3

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC") === countChar("BBC", "B"));
console.log(countBs("BaaBaaB") === countChar("BaaBaaB", "B"));