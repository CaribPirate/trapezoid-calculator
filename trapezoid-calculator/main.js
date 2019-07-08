//trapezoid calc

//event listener
document.getElementById('calc-btn1').addEventListener('click', findArea);
document.getElementById('calc-btn2').addEventListener('click', findPerimeter);

//functions
function findArea() {
  //input
  let a1 = Number(document.getElementById('a1').value);
  let b1 = Number(document.getElementById('b1').value);
  let h1 = Number(document.getElementById('h1').value);

  //process - formula
  let area1 = (a1 + b1) / 2 * h1;

  //output - display product
  document.getElementById('area').innerHTML = area1;
}

function findPerimeter() {
  //input
  let num1 = Number(document.getElementById('side1').value);
  let num2 = Number(document.getElementById('side2').value);
  let num3 = Number(document.getElementById('side3').value);
  let num4 = Number(document.getElementById('side4').value);

  //process - formula
  let perimeter1 = num1 + num2 + num3 + num4;

  //output - display sum
  document.getElementById('perimeter')
    .innerHTML = perimeter1;
}