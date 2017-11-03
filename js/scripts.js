// Business Logic
function Pizza(base, size, addOn)
this.base: base;
this.size: size;
this.addOn: addOn;
this.price = 0;
}

Pizza.prototype.setPizzaPrice = function() {
  if (this.base === "cheese") {
    return 8;
  } else if (this.base === "pepperoni" || this.base === "pesto") {
    return 10;
  }
}
