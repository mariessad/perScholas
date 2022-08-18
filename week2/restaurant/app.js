let menu = {
  breakfast: ["egg Sandwich", "eggs bennedict", "bagel", "grand slam"],
  lunch: ["spaghetti", "pasta bolognese", "lasagna", "pasta alfredo"],
  dinner: ["Steak and potatoes", "dinner lasagna", "pasta and garlic bread"],
  drinks: ["milk", "soda", "vodka tonic", "spaghetti water"],
  dessert: ["tiaramasu", "cheesecake", "chocolate soufflee", "gelatto"],
  specials: [
    "roasted duck",
    "arranncini",
    "homemade meatballs",
    "pasta fagioli",
  ],
};

const doSomething = () => {
  let target = document.querySelector(".magi");

  target.innerHTML = menu.breakfast[0];
};
