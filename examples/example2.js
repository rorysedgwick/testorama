// Import the test framework to be used
var test = require("tape");

// A function that creates a new array containing all the even numbers in an input array
function arrayPusher(array) {
  var newArray = [];

  for(var i = 0; i < array.length; i += 1) {

    if(array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}



// ------------------ BEGIN TESTS ---------------- \\

// Describe what is being tested
test("The new array should", function(t) {

  // Create a dummy data set to be used as the function parameter
  var dummyData = [1, 2, 3, 4, 5, 6];

  // Call the function with the dummy data and store the result
  var testArray = arrayPusher(dummyData);


  // Assert that the result will truthy
  t.ok(testArray, "be a truthy value");

  // Assert the type of the result will be an array
  t.equal(Object.prototype.toString.call(testArray), "[object Array]", "be an array");

  // Assert the length of the array will be 3
  t.equal(testArray.length, 3, "contain 3 values");

  // Assert the value at position 2 will be 4
  t.equal(testArray[1], 4, "have the number four at index 1");

  t.end();

});


test("The new array should", function(t) {
  // Redefine the data input and call the function again
  dummyData = [1, 3, 5, 7, 9];
  testArray = arrayPusher(dummyData);

  // Assert the array will be empty
  t.equal(testArray.length, 0, "contain 0 values");

  // Assert the result will be falsy
  t.notOk(testArray[0], "be a falsy value");

  t.end();

});


test("The new array should", function(t) {

  // Redefine the data input and call the function again
  dummyData = "dramatic-bananas";
  testArray = arrayPusher(dummyData);

  // Assert the array will be empty
  t.equal(testArray.length, 0, "contain 0 values");

  t.end();

});
