// Business Logic
function Pizza(base, size) {
  this.base = base;
  this.size = size;
  this.addOns = [];
  this.price = 0;
}

Pizza.prototype.setPizzaAddOnsPrice = function () {
  if (this.addOns = true) {
    return this.addOns.length * 2; //will take number of toppings in array and multiply by 2
  }
}

Pizza.prototype.setPizzaBasePrice = function() {
  if (this.base === "cheese") {
    return 8;
  } else { return 10;
  }
}

Pizza.prototype.setPizzaSizePrice = function() {
  if (this.size === "small") {
    return 0;
  } else if (this.size === "medium") {
    return 4;
  } else { return 6;
  }
}


function resetSelects() {
  $("select#pizza-base-select").val("");
  $("select#pizza-size-select").val("");
  $("select#pizza-add-on-select").val("");
}

// User Interface Logic
$(function() {
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var selectedBase = $("#pizza-base-select").val();
    var selectedSize = $("#pizza-size-select").val();
    var addOns = [];
    $('.toppings input:checked').each(function() {
      addOns.push($(this).val());
    });
    var customPizza = new Pizza(selectedBase, selectedSize, addOns);
    debugger;

    var basePrice = customPizza.setPizzaBasePrice();
    var sizePrice = customPizza.setPizzaSizePrice();
    var addOnsPrice = customPizza.setPizzaAddOnsPrice();
    var total = basePrice + sizePrice + addOnsPrice;
    console.log(total);


    $("#place-order-button").click(function() {
      $("#order-display").show();
      $("#pizza-base").text(customPizza.base);
      $("#pizza-size").text(customPizza.size);
      $("#pizza-add-ons").append(customPizza.addOns + ", ");
      $("#pizza-price").text(total);

      resetSelects();
    });
  });
});
