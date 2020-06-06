/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    // C1
    // var vowels = ['a', 'e', 'i', 'o', 'u']
    // for (var i = 0; i < s.length; i++)
    //     {
    //         if (vowels.indexOf(s[i]) > -1)
    //             {
    //                 console.log(s[i]);
    //             }
    //     }
    
    // for (var j = 0; j < s.length; j++)
    //     {
    //         if (vowels.indexOf(s[j]) < 0)
    //             {
    //                 console.log(s[j]);
    //             }
    //     }
    // C2
    for (var i = 0; i < s.length; i++){
        if (s[i] === 'a' || s[i] === 'A' || s[i] === 'e' || s[i] === 'E' || s[i] === 'i'
        || s[i] === 'I'|| s[i] === 'o' || s[i] === 'O' || s[i] === 'u' || s[i] === 'U'){
            console.log(s[i]);
        }
    }
    for (var j = 0; j < s.length; j++){
        if (s[j] !== 'a' && s[j] !== 'A' && s[j] !== 'e' && s[j] !== 'E' && s[j] !== 'i'
        && s[j] !== 'I'&& s[j] !== 'o' && s[j] !== 'O' && s[j] !== 'u' && s[j] !== 'U'){
            console.log(s[j]);
        }
    }
}