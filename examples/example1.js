// Import the test framework to be used
var test = require("tape");

// Write code
function multiplier(a, b) {
  return a * b;
}


 // ---------------- BEGIN TESTS -------------- \\

// Describe what is being tested
test("multiplication function", function(t) {

  // The function is called with testtt/placeholder values
  var result = multiplier(3, 5);

  // Assert that the function re what we expect
  t.equal(result, 15, "should return the value 15");

  // Assert the return will be of the correct data type
  t.equal(typeof result, "number", "should return a number");



  // Redefine result to test the output with another set of possible inputs
  result = multiplier(3, "potato");

  // Assert that the outcome will be falsy*
  t.notOk(result, false, "should return a falsy value");

  // Declare the end of this set of tests
  t.end();
});






// Falsy values:
//  Falsy values in Javascript are ones that will equate to false when tested as a boolean
//  They are false, undefined, null, "" (empty string), 0 and NaN (not a number)
