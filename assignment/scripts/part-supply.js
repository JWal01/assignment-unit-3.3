console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

let supplyChanges = [3, 5, -6, 0, 7, 11];

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop());
console.log(supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for(i = 0; i < (supplyChanges.length); i += 1){
  if(supplyChanges[i] > 0){
    console.log('Added', supplyChanges[i], 'parts.');
  }else if(supplyChanges[i] === 0){
    console.log('No Change');
  }else{
    console.log('Removed', Math.abs(supplyChanges[i]), 'parts.');
  }
}



// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
for(const element of supplyChanges){
  if(element > 0){
    console.log('Added', element, 'parts.');
  }else if(element === 0){
    console.log('No Change');
  }else{
    console.log('Removed', Math.abs(element),'parts');
  }
}


// 8. Write a loop to determine the total number of parts available by
//    adding up all thsupplyChangese numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
let sum = 0
for (let i = 0; i < supplyChanges.length; i++) {
  sum += supplyChanges[i]
  
}
console.log(sum);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');