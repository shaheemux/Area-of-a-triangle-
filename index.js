function calculateArea() {
    var baseInput = document.getElementById("base");
    var heightInput = document.getElementById("height");
    var result = document.getElementById("result");
  
    var base = parseFloat(baseInput.value);
    var height = parseFloat(heightInput.value);
    var area = (base * height) / 2;
  
    result.innerHTML = "The area of the triangle is: " + area.toFixed(2);
  }