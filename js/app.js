var expression = ""
var converstion = {
        "+":"+",
        "−":"-",
        "÷":"/",
        "×":"*",
        ".":"."
      }

$(".btn").click(function(e){
  var value = this.innerHTML;
  if (value == "=") {
    $(".input")[0].innerHTML = math.eval(expression).toString();
    expression = math.eval(expression).toString();
    return;
  }
  console.log(this.innerHTML);
  $(".input")[0].innerHTML += this.innerHTML;
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
    expression += value
  }else {
    expression += converstion[value]
  }

});

$(".clear").click(function(e){
  var elm = this;
  $(elm).addClass("animated")
  setTimeout(
  function()
  {
    expression = "";
    $(".input")[0].innerHTML = "";
    $(elm).removeClass("animated");
  }, 500);
});
