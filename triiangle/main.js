// main.js

const triangleModule = require('./triangleModule');

// Example side lengths of a triangle
const side1 = 5;
const side2 = 5;
const side3 = 5;

// Find and print the type of triangle
const triangleType = triangleModule.findTriangleType(side1, side2, side3);
console.log(`Type of triangle: ${triangleType}`);

// Calculate and print the area of the triangle
const triangleArea = triangleModule.calculateTriangleArea(side1, side2, side3);
console.log(`Area of the triangle: ${triangleArea}`);
