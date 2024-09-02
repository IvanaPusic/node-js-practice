//---------------------- IMPORT COMMON JS MODULES -----------------------

// const { generateRandomNumber, celciusToFahrenheit } = require("./01-commonjs-modules")

// const randomNumber = generateRandomNumber();
// const convertedNumber = celciusToFahrenheit(19);

// console.log(`Random number ${randomNumber}`);
// console.log(`Celcius to Fahrenheit ${convertedNumber} F`);

//---------------------- IMPORT ES JS MODULES -----------------------
// import { getPosts } from "./02-es-modules.js";
import getPosts,{ getPostLength } from "./02-es-modules.js";

const allPosts = getPosts();
const postsLength = getPostLength();

console.log(`All posts ${JSON.stringify(allPosts)}`);
console.log(`Posts length: ${postsLength}`);
