console.log(multiNums(6,9)) ; 

// Uncaught ReferenceError: Cannot access 'multiNums' before initialization

let multiNums = function( a, b) {
    return a * b ;
}

            // Right Solution 
            
// function multiNums(a,b) {
//     return a * b ;
// }