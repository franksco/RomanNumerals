/// User Interface Logic ///
$(document).ready(function() {
  $("form.Roman-Numerals").submit(function(event) {
    var number = ($("input#number").val());
    var result = place(number);
    $("#result").show();
    event.preventDefault();

///Business Logic ///

var place = function(number){
  if (number > 1000 && number < 3999){
    return thousandth(number);
  }else if (number <= 1000 && number >= 500){
    return fivehundredth(number);
  }else if (number <= 500 && number >= 100){
    return onehundredth(number);
  }else if (number <=50 && number >=10){
    return fiftieth(number);
  } else if (number <=10 && number >=5){
    return tenth(number);
  }else if (number <=5 && number >=1){
    return fifth(number);
  }else{
    return "Your number does not fix the criteria!";
  }
}

var thousandth = function(number){
  if (number >= 1000 ){
    return "M" + thousandth(number-1000);
  }if (0 < number < 1000){
    return fivehundreth(number);
  }
}

var fivehundreth = function(number){
  if (number >= 900){
    return "CM" + fivehundreth(number-900);
  }if (number >= 600){
    return "DC" + fivehundreth(number-600);
  }if (number >= 500){
    return "D" + fivehundreth(number-500);
  }if (0 < number < 500){
    return onehundreth(number);
  }
}

var onehundreth = function(number){
  if (number >= 400){
    return "CD" + onehundreth(number-400);
  }if (number >= 100){
    return "C" + onehundreth(number-100);
  }if (0 < number < 100){
    return fiftieth(number);
  }
}

var fiftieth = function(number){
  if (number >= 90){
    return "XC" + fiftieth(number-90);
  }if (number >= 60){
    return "LX" + fiftieth(number-60);
  }if (number >= 50){
    return "L" + fiftieth(number-50);
  }if (number >= 0){
    return tenth(number);
  }
}

var tenth = function(number){
  if(number < 1) { return "";}
  if (number >= 40){
    return "CD" + onehundreth(number-400);
  }if (number >= 100){
    return "C" + onehundreth(number-100);
  }if (0 < number < 100){
    return fiftieth(number);

  }
}
