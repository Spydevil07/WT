class MobilePhoneList {
    constructor() {
      this.brands = []; // Initialize an empty array to store mobile phone brands
    }
  
    AddItem(brand) {
      this.brands.push(brand); // Add the item to the list
    }
  
    GetList() {
      return this.brands; // Get the current list of mobile phone brands
    }
  }
  
  // Usage example:
  const mobilePhoneList = new MobilePhoneList();
  
  // Add some predefined brands
  mobilePhoneList.AddItem("Apple");
  mobilePhoneList.AddItem("Samsung");
  mobilePhoneList.AddItem("Google");
  
  // Get the current list
  console.log("Current Mobile Phone Brands:", mobilePhoneList.GetList());
  
  // Get input from the user and add it to the list
  const userInput = "User's Brand"; // Replace this with actual user input
  mobilePhoneList.AddItem(userInput);
  
  // Get the updated list
  console.log("Updated Mobile Phone Brands:", mobilePhoneList.GetList());
  