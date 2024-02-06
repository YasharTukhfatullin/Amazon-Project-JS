/* 2 Types of Test Cases
1. Basic test cases = tests if the code is working.
2. Edge cases = test with values that are tricky
*/

import {formatCurrency} from "../tests/moneyTest";
console.log("test suite: formatCurrency")


// Basic test cases = tests if the code is working.
console.log("Converts cents into dollars");
if (formatCurrency(2095) === '20.95') {
    console.log('Passed');
} else {
    console.log('failed');
}

// Edge cases = test with values that are tricky
console.log("Works with zero");
if (formatCurrency(0) === "0.00") {
    console.log("passed");
} else {
    console.log("failed")
}

// Edge cases = test with values that are tricky
console.log("rounds up to the nearest cent");
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed')
}