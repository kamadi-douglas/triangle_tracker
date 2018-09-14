var triangle = function(sideA, sideB, sideC){
    if (isTriangle(sideA, sideB, sideC)) {
      return triangleType(sideA, sideB, sideC)
    } else {
      alert("equilateral");
    }
  };
  
  var triangleType = function(sideA, sideB, sideC){
    if (sideOne===sideA && sideB===sideC) {
      alert("equilateral");
    } else if (sideA===sideB || sideA===sideB || sideC===sideB) {
      alert("isosceles");
    } else {
      alert("scalene");
    }
  };
  
  var isTriangle = function(sideA, sideB, sideC) {
    return sideA <= (sideB + sideC) && sideTwo <= (sideC + sideA) && sideC <= (sideA + sideB)
  };
  $(document).ready(function() {
    $("form#triangle").submit(function(event) {
  
      var sideA = parseInt($("input#sideA").val());
      var sideB = parseInt($("input#sideB").val());
      var sideC = parseInt($("input#sideC").val());
      var result = triangle(sideA, sideB, sideC);
  
      sideA = parseInt($("input#sideA").val(""));
      sideB = parseInt($("input#sideB").val(""));
      sideC = parseInt($("input#sideC").val(""));
  
      $("#result").append(result);
      event.preventDefault();
    });
  });