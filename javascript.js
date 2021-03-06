var number1 = document.getElementById("answer1");
//number1.innerHTML = numberOne();
// 1. Show me how to calculate the average price of all items.
numberOne()
function numberOne(){
  var priceList = [];
  for (i=0; i < items.length; i++){
    if (items[i].price > 0){
      priceList.push(items[i].price);
    }
  var averagePrice = 0;
  for (count=0; count < priceList.length; count++){
  averagePrice += priceList[count] / priceList.length
      }
    }
    number1.innerHTML += "<p>" + "The average price is $" + averagePrice.toFixed(2) + "</p>"
  }


// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var number2 = document.getElementById("answer2");

// setting innerHTML to an array just blobs it together
// innerHTML expects a string. if it sees an array, it makes it a string
// does it clumsily though, so no line breaks
number2.innerHTML = numberTwo();

// two options to fix:
// 1) actually add on to innerHTML inside your loop and inlude "<p>" + items[count].title + "</p>"
// 2) store the result of the function in a variable, and loop over it outside the function

var answer2 = numberTwo()
for (var i = 0; i < answer2.length; i++) {
  number2.innerHTML += "<p>" + answer2[i]
}

function numberTwo(){
  var priceList = [];
  for (i=0; i < items.length; i++){
    if (items[i].price > 0){
      priceList.push(items[i].price);
    }
  }
    var between = [];
    for (count=0; count < priceList.length; count++){
      if(priceList[count] > 14 && priceList[count] < 18){
      number2.innerHTML += "<p>" + items[count].title + "</p>"
    }
  }
  return between; // between is an array
}

// 3. Which item has a "GBP" currency code? Display it's name and price.
var number3 = document.getElementById("answer3");
numberThree()
function numberThree(){
  var name = [];
  var cost = [];
  for (i=0; i < items.length; i++){
    if (items[i].currency_code === "GBP"){
        name.push(items[i].title);
        cost.push(items[i].price);
    }
  }number3.innerHTML += "<p>" + name + " " + "costs " + "&pound" + cost + "." + "</p>"
}

// 4. Display a list of all items who are made of wood.
var number4 = document.getElementById("answer4");
numberFour()
function numberFour(){
  var end = " is made of wood."
  var woodList = [];
  for (i=0; i < items.length; i++){
    for (count=0; count < items[i].materials.length; count++){
      if (items[i].materials[count] === "wood"){
        number4.innerHTML += "<p>" + items[i].title + end + "</p>"
      }
      }
    }
  }


// 5. Which items are made of eight or more materials?
//Display the name, number of items and the items it is made of.
var number5 = document.getElementById("answer5");
numberFive()
function numberFive(){

  for (i=0; i < items.length; i++){
      if (items[i].materials.length > 8){
        number5.innerHTML += "<p>" + items[i].title + " " + " " + "has" + " " + items[i].materials.length + " " + "materials." + "</p>"
      for (count=0; count < items[i].materials.length; count++)
          number5.innerHTML += "<p>" + items[i].materials[count] + "</p>"
          number5.innerHTML += "<p>"+"</p>"
      }
      }
    }


// 6. How many items were made by their sellers?
var number6 = document.getElementById("answer6");
numberSix()
function numberSix(){
  var sellerMade = 0;
  for (i=0; i < items.length; i++){
    if (items[i].who_made === "i_did"){
      sellerMade += 1;
    }
  }
  number6.innerHTML = "<p>" + sellerMade + " " + "were made by their sellers." + "</p>"
}
