var beepboop = function (input) {

$(".result").text(total)
}





$(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    beepboop(input);
  });
});
