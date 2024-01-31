// currency-convertor.js
const currencyConverter = {
    convertToRupees: function (dollars) {
      const conversionRate = 75; // Assuming 1 dollar = 75 Rupees
      const rupees = dollars * conversionRate;
      return rupees;
    },
  
    convertToDollars: function (rupees) {
      const conversionRate = 75; // Assuming 1 dollar = 75 Rupees
      const dollars = rupees / conversionRate;
      return dollars;
    }
  };
  
  module.exports = currencyConverter;