// triangleModule.js

// Function to determine the type of triangle
function findTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// Function to calculate the area of the triangle using Heron's formula
function calculateTriangleArea(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2; // Semi-perimeter
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}

// Exporting the functions to be used in other files
module.exports = {
    findTriangleType,
    calculateTriangleArea
};
