const posController = {
  pos: (req, res, next) => {
    console.log("click");
    // 建構式函式 Constructor function
    function Drink(name, sugar, ice) {
      this.name = name;
      this.sugar = sugar;
      this.ice = ice;
    }
    // price function
    Drink.prototype.price = function () {
      switch (this.name) {
        case "Black Tea":
        case "Oolong Tea":
        case "Baozong Tea":
        case "Green Tea":
          return 30;
        case "Bubble Milk Tea":
        case "Lemon Green Tea":
          return 50;
        case "Black Tea Latte":
        case "Matcha Latte":
          return 55;
        default:
          alert("沒有這個品項");
      }
    };

    if (typeof document === "undefined") {
      console.log("undefined");
    } else {
      console.log("not undefined");
    }

    const addDrinkButton = document.querySelector(
      '[data-alpha-pos="add-drink"]'
    );
    addDrinkButton.addEventListener("click", function () {
      console.log("click")
    });
  },
};

module.exports = posController;
