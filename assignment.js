//- Create a Palindrome

input = "mom"
function palindrome(input) {

    let len = input.length;
    let mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (input[i] !== input[len - 1 - i]) {
            console.log(input + "is not Palindrome")
        }
    }

    console.log ("This is palindrome")
}
palindrome(input)




/// Remove duplicates

let Name = ["John","Mary", "Alex", "Steve", "Mary", "John"]
function removeDuplicates(Name){
    let unique_array = []
    for(let i = 0;i < Name.length; i++){
        if(unique_array.indexOf(Name[i]) == -1){
            unique_array.push(Name[i])
        }
    }
    return unique_array
}

console.log(removeDuplicates(Name));



/// - Create an app which finds the largest number in an array

let numbers = [1, 2, 3, 4];

function largestnumber(numbers) {

  return Math.max(...numbers)
}
var largest = largestnumber(numbers)
console.log(largest, 'is the largest number')

///// - Create an app which finds the smallest number in an array

let numberinarray = [1, 2, 3, 4];

function smallestnumber(numbers) {
  return Math.min(...numbers)
}
var smallest  = smallestnumber(numbers)
console.log(smallest, 'is the smallest number')
