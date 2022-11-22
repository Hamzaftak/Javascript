"use strict";

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// highest - lowest

function maxArray(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max && typeof array[i] === "number") max = array[i];
  }
  return max;
}

function minArray(array) {
  let min = array[0];
  for (const element of array) {
    if (element < min && typeof element === "number") min = element;
  }
  return min;
}

const x = [6, 4, 2, 8, 4, 9, 5, 6, 11, 20, 7];
const maximum = maxArray(x);
console.log(maximum);

function temperatureAmplitude(temperatureArray) {
  const maxtemp = maxArray(temperatureArray);
  const mintemp = minArray(temperatureArray);

  return maxtemp - mintemp;
}
console.log(temperatureAmplitude(temperature));

// Function should now receives two arrays of temperature

const temperature1 = [1, -7, 3, "error", 8];
const temperature2 = [10, 22, 14, 17, "error", 21, -4];

const all_temperatures = temperature1.concat(temperature2);
console.log(temperatureAmplitude(all_temperatures));
