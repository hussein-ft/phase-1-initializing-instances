// Class for Breakfast
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Class for Dinner
  class Dinner {
    #dessert; // Private property
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; // Assigning private property
    }
  
    // Method to access private property
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Example usage:
  
  // Breakfast instance
  const myBreakfast = new Breakfast("Pancakes", "Orange Juice");
  console.log(myBreakfast);
  // Output: Breakfast { food: 'Pancakes', drink: 'Orange Juice' }
  
  // Lunch instance
  const myLunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  console.log(myLunch);
  // Output: Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  
  // Dinner instance
  const myDinner = new Dinner("Greek Salad", "Mushroom Soup", "Grilled Salmon", "Cheesecake");
  console.log(myDinner.getDessert()); 
  // Output: Cheesecake
  