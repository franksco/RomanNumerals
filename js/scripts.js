/// User Interface Logic ///
$(document).ready(function() {
  $("form.Roman-Numerals").submit(function(event) {
    // debugger;
    var number = (parseInt($("#number_input").val()));
    var result = place(number);
    $("#numerals").text(result);
    $("#result").show();
    event.preventDefault();
  })
});
///Business Logic ///

function place(number){
  if (number > 1000 && number <= 3999) {
    return thousandth(number);
  } else if (number < 1000 && number >= 500) {
    return fivehundreth(number);
  } else if (number < 500 && number >= 100) {
    return onehundreth(number);
  } else if (number < 100 && number >= 50) {
    return fiftieth(number);
  } else if (number < 50 && number >= 1) {
    return tenth(number);
  } else {
    return "Your number does not fit the criteria!";
  }
}

var thousandth = function(number){
  if (number >= 1000 ){
    return "M" + thousandth(number - 1000);
  }
  if (0 < number < 1000){
    return fivehundreth(number);
  }
}

var fivehundreth = function(number){
  if (number >= 900){
    return "CM" + fivehundreth(number - 900);
  }
  if (number >= 600){
    return "DC" + fivehundreth(number - 600);
  }
  if (number >= 500){
    return "D" + fivehundreth(number - 500);
  }
  if (0 < number < 500){
    return onehundreth(number);
  }
}

var onehundreth = function(number){
  if (number >= 400){
    return "CD" + onehundreth(number - 400);
  }
  if (number >= 100){
    return "C" + onehundreth(number - 100);
  }
  if (0 < number < 100){
    return fiftieth(number);
  }
}

var fiftieth = function(number){
  if (number >= 90){
    return "XC" + fiftieth(number - 90);
  }
  if (number >= 60){
    return "LX" + fiftieth(number - 60);
  }
  if (number >= 50){
    return "L" + fiftieth(number - 50);
  }
  if (number >= 0){
    return tenth(number);
  }
}

var tenth = function(number){
  if(number < 1) { return "";}
  if (number >= 40){
    return "XL" + thenth(number - 40);
  }
  if (number >= 10){
    return "X" + onehundreth(number - 10);
  }
  if (number >= 9){
    return "IX" + onehundreth(number - 9);
  }
  if (number >= 5){
    return "V" + onehundreth(number - 5);
  }
  if (number >= 4){
    return "IV" + onehundreth(number - 4);
  }
  if (number >= 1){
    return "I" + onehundreth(number - 1);
  }
}
