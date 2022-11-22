"use strict";

// Coding Chanllenge (Udemy: the complete java course)

/* Given an array of forcasted maximum temperatures, a thermometer displays a string with these temperatures 

For example: [17, 21, 23] will print "... 17 in 1 days ... 21 C in 2 days ... 23 C in 3 days..."

Creat a function printForecast which takes in an array 'arr' and logs a string like the above to the console. 

TEST DATA 1 : [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 4, 0] */

//let data = [17, 21, 23];
let data = [12, 5, -5, 4, 0];

const printForecast = function (data) {
  let out = "";
  const words = ["... ", " C in ", " days "];
  for (let i = 0; i < data.length; i++) {
    let days = i + 1;
    out = out + words[0] + data[i] + words[1] + days + words[2];
  }
  return out + "...";
};
console.log(printForecast(data));
