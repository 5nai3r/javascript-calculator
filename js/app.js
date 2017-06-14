var expression = ""
var converstion = {
        "+":"+",
        "−":"-",
        "÷":"/",
        "×":"*",
        ".":"."
      }


var leadingzero = true
var decimal = false
var operator = true
var newexpression = false

$(".btn").click(function(e){
  var value = this.innerHTML;
  if (value == "=") {
    $(".input")[0].innerHTML = math.eval(expression).toString();
    expression = math.eval(expression).toString();
    newexpression = true;
    return;
  }
  if((value == 0 && leadingzero)||(value =="." && decimal)){return}
  leadingzero = false;
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
    if(newexpression){return;}
    expression += value
    operator = false;
  }else {
    if(value == "."){decimal = true;leadingzero = false;operator=false}else {decimal = false}
    if(operator){return;}
    leadingzero = true
    newexpression = false
    expression += converstion[value]
    operator = true;
  }
  $(".input")[0].innerHTML += this.innerHTML;
});

$(".clear").click(function(e){
  leadingzero = true;
  decimal = false;
  operator = false;
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
