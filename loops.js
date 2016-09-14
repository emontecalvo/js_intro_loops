// max and min (without sort)
// To complete this drill, you need to implement two functions,
//  max and min. Both functions should take a single argument:
//   a list of numbers called numbers. max(myNumbers) 
// should return the largest number in the list, while min(myNumbers) 
// should return the smallest.

// Assume that the numbers input only contains numbers (that is,
//  you don't have to inspect your inputs to confirm they only 
//  contain numbers).

// If the numbers array is empty, then both max and min should 
// return null.

// Finally, note that you are not allowed to use JavaScript's 
// sort method which provides a simple way to solve this 
// problem (simply sort the list and return either the first 
//   or last element, depending on if you need min or max).

function max(numbers) {
 // your code here
  var maybe_max = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (maybe_max < numbers[i]) {
      maybe_max = numbers[i];
    }
  }
  return maybe_max;
}


function min(numbers) {
 // your code here
  var maybe_min = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (maybe_min > numbers[i]) {
        maybe_min = numbers[i];
       }
     }
    return maybe_min;
}


// Compute the average
// Write a function called average that takes a list of numbers 
// as its input, and returns the average generated 
// from the list of numbers.

// Recall that to compute the average of a set of numbers,
//  you add together all of the numbers, and then divide the
//   resulting value by the number of items in the list.

function average(numbers) {
  // your code goes here
  var total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}


// FizzBuzz
// Write a function that implements the FizzBuzz game.
//  FizzBuzz is a game used to teach multiples/divisors. 
//  The player is given a number to count to. Then, they
//   count from one up to that number. For numbers 
//   divisible by 3, they substitute the word "fizz",
//    for numbers divisible by 5, they subsitute the word "buzz", 
//     and for numbers divisible by both 3 and 5, 
// they substitute the word "fizzbuzz".


function fizzBuzz(countTo) {
  // your code here
  var counter = 1;
  var fizzy_arr = [];
  while (counter <= countTo) {
    if (counter % 15 === 0) {
      fizzy_arr.push('fizzbuzz');
    }
    else if (counter % 5 === 0) {
      fizzy_arr.push('buzz');
    }
    else if (counter % 3 === 0) {
      fizzy_arr.push('fizz');
    }
    else {
      fizzy_arr.push(counter);
    }
    counter += 1;
  }
  return fizzy_arr;
}





