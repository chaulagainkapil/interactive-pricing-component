let basePrice = 10;
let increment = 0.2;
function calc() {
  $(".main__card--upper--views>p>span").html($("#myRange").val() + "K");
  var newPrice = basePrice + $("#myRange").val() * increment - increment;
  var newPriceF = newPrice.toFixed(2);
  $(".main__card--upper--price>p>span").html(newPriceF);
}
function calc2() {
  if ($(".toggleT2").hasClass("active")) {
    basePrice = 10 * 0.75;
    increment = 0.2 * 0.75;
  } else {
    basePrice = 10;
    increment = 0.2;
  }
  calc();
}
$(document).on("click", ".switch>input", function () {
  $(".toggleT1").toggleClass("active");
  $(".toggleT2").toggleClass("active");
  calc2();
});
$(document).on("input", "#myRange", function () {
  calc2();
});
