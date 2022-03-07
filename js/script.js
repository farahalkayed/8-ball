
$(".button").click(function () {
    //a random generated
    //that num chooses which string to display 
    //the string displays in html
    let numVal = (Math.floor(Math.random() * 10) + 1)
    const expr = numVal;
switch (expr) {
  case 1:
    console.log("Try Again L8r")
    $("#triangle").attr("src","imgs/L8R2.png")
    break;
  case 2:
    console.log("Yes, yes, yes!");
    $('#triangle').attr("src","imgs/yes2.png")
    break;
  case 3:
    console.log("Better Not");
    $('#triangle').attr("src","imgs/better-not2.png")
    break;
  case 4:
    console.log("Certainly");
    $('#triangle').attr("src","imgs/CERTAIN2.png")
    break;
    case 5:
    console.log("Go Get 'em, Tiger.");
    $('#triangle').attr("src","imgs/tiger2.png")
    break;
  case 6:
    console.log("Better luck next year");
    $('#triangle').attr("src","imgs/luck2.png")
    break;
  case 7:
    console.log("Not today");
    $('#triangle').attr("src","imgs/not-today2.png")
    break;
  default:
    console.log("Certainly");
    $('#triangle').attr("src","imgs/CERTAIN2.png")
}
})





