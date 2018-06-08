var beepboop = function (input) {

  if (input < 0){
    return "Please enter a positive number.";
  }

  var number1 = [];

  for (var i = 0; i <= input; i++){
    number1.push(i);
  }
  if (input % 3 = 0)

  /*if (input = 3){
    number1.push('Beep!')
  }
  if (input = 4){
    number1.push('Boop!')
  }
  for (var i = 0; i <= input; i++){
    if(input % 3 = 0){
      number1.push(i)
    }
  }*/

var total = number1;







$(".result").text(total)
}





$(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    beepboop(input);
  });
});
