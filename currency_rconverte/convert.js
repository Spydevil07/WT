const currencyConverter = require('./currency');

const dollars = 100;
const rupees = currencyConverter.convertToRupees(dollars);
console.log(`${dollars} dollars is equal to ${rupees} Rupees`);

const dollars2 = currencyConverter.convertToDollars(rupees);
console.log(`${rupees} Rupees is equal to ${dollars2} dollars`);