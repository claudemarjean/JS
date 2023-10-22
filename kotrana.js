let string = "aia";

let isPalindrome = (str) =>{
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(string));