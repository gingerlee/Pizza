// Business Logic
function Pizza(base, size) {
  this.base = base;
  this.size = size;
  this.addOns = [];
  this.price = 0;
}


Pizza.prototype.setPizzaBasePrice = function() {
  if (this.base === "Cheese") {
    return 8;
  } else { return 10;
  }
}

Pizza.prototype.setPizzaSizePrice = function() {
  if (this.size === "Small") {
    return 0;
  } else if (this.size === "Medium") {
    return 4;
  } else { return 6;
  }
}


function resetSelects() {
  $("select#pizza-base-select").val("null");
  $("select#pizza-size-select").val("null");
  $('input:checkbox').removeAttr('checked');
}

// User Interface Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var selectedBase = $("#pizza-base-select").val();
    var selectedSize = $("#pizza-size-select").val();
    var selectedAddOns = [];
    $('.toppings input:checked').each(function() {
      selectedAddOns.push($(this).val());
    });
    var customPizza = new Pizza(selectedBase, selectedSize, selectedAddOns);

    var basePrice = customPizza.setPizzaBasePrice();
    var sizePrice = customPizza.setPizzaSizePrice();
    var addOnsPrice = selectedAddOns.length * 2;
    var total = basePrice + sizePrice + addOnsPrice;

    $("#place-order-button").click(function() {
      $("#pizza-base").text(customPizza.base);
      $("#pizza-size").text(customPizza.size);
      $("#pizza-add-ons").append(selectedAddOns.join(", "));
      $("#pizza-price").text(total);
      $("#order-display").fadeIn();
      $("#pizza-form").hide();
      $("#menu-header").hide();
      $("#place-order-button").hide();

      resetSelects();
    });
  });
});
