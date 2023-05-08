let plus = false;
let minus = false;
let multiply = false;
let divide = false;
let dot=true;
function disable() {
  plus = false;
  minus = false;
  multiply = false;
  divide = false;
  dot=false
}
function enable() {
  plus = true;
  minus = true;
  multiply = true;
  divide = true;
  dot=true;
}

function PLUS() {
  if (plus) {
    let result = document.getElementById("result").textContent;
    let lastchar = result[result.length - 1];
    let string = "";

    if (/[-,*,/]/.test(lastchar)) {
      string = result.slice(0, result.length - 1) + "+";
      switch (lastchar) {
        case `-`:
          minus = true;
          break;
        case "*":
          multiply = true;
          break;
        case "/":
          divide = true;
          break;
        default:
          console.log("inside switch default");
      }
    } else string = result + "+";
    document.getElementById("result").textContent = string;

    plus = false;
  }
}

function MINUS() {
  if (minus) {
    let result = document.getElementById("result").textContent;
    let lastchar = result[result.length - 1];
    let string = "";

    if (/[+,*,/]/.test(lastchar)) {
      string = result.slice(0, result.length - 1) + "-";

      switch (lastchar) {
        case "+":
          plus = true;
          break;
        case "*":
          multiply = true;
          break;
        case "/":
          divide = true;
          break;
        default:
          console.log("inside switch default");
      }
    } else string = result + "-";

    document.getElementById("result").textContent = string;
    minus = false;
  }
}

function MUL() {
  if (multiply) {
    let result = document.getElementById("result").textContent;
    let lastchar = result[result.length - 1];

    let string = "";

    if (/[-,+,/]/.test(lastchar)) {
      string = result.slice(0, result.length - 1) + "*";
      console.log("I am inside overwriting");

      switch (lastchar) {
        case `+`:
          plus = true;
          break;
        case "-":
          minus = true;
          break;
        case "/":
          divide = true;
          break;
        default:
          console.log("inside switch default");
      }
    } else string = result + "*";
    document.getElementById("result").textContent = string;

    multiply = false;
  }
}

function DIV() {
  if (divide) {
    let result = document.getElementById("result").textContent;
    let lastchar = result[result.length - 1];
    let string = "";

    if (/[-,*,+]/.test(lastchar)) {
      string = result.slice(0, result.length - 1) + "/";

      switch (lastchar) {
        case `+`:
          plus = true;
          break;
        case "*":
          multiply = true;
          break;
        case "-":
          minus = true;
          break;
        default:
          console.log("inside switch default");
      }
    } else string = result + "/";
    document.getElementById("result").textContent = string;

    divide = false;
  }
}

function one() {
  let result = document.getElementById("result").textContent;
  let string = result + 1;
  document.getElementById("result").textContent = string;
  enable();
}
function two() {
  let result = document.getElementById("result").textContent;
  let string = result + 2;
  document.getElementById("result").textContent = string;
  enable();
}
function three() {
  let result = document.getElementById("result").textContent;
  let string = result + 3;
  document.getElementById("result").textContent = string;
  enable();
}

function four() {
  let result = document.getElementById("result").textContent;
  let string = result + 4;
  document.getElementById("result").textContent = string;
  enable();
}
function five() {
  let result = document.getElementById("result").textContent;
  let string = result + 5;
  document.getElementById("result").textContent = string;
  enable();
}
function six() {
  let result = document.getElementById("result").textContent;
  let string = result + 6;
  document.getElementById("result").textContent = string;
  enable();
}
function seven() {
  let result = document.getElementById("result").textContent;
  let string = result + 7;
  document.getElementById("result").textContent = string;
  enable();
}

function eight() {
  let result = document.getElementById("result").textContent;
  let string = result + 8;
  document.getElementById("result").textContent = string;
  enable();
}
function nine() {
  let result = document.getElementById("result").textContent;
  let string = result + 9;
  document.getElementById("result").textContent = string;
  enable();
}
function zero() {
  let result = document.getElementById("result").textContent;
  let string = result + 0;
  document.getElementById("result").textContent = string;
  enable();
}

function DEL() {
  let result = document.getElementById("result").textContent;
  let string = result.slice(0, result.length - 1);
  let lastchar=result[result.length-1]

  switch (lastchar) {
    case `+`:
      plus = true;
      break;
    case "*":
      multiply = true;
      break;
    case "-":
        minus = true;
      break;
    case "/":
        divide = true;
        break;
    default:
      console.log("inside switch default");
  }

  document.getElementById("result").textContent = string;
  
}

function AC() {
  let result = document.getElementById("result").textContent;
  document.getElementById("result").textContent = "";
  disable()
}

function DOT() {
    if(dot){
        let result = document.getElementById("result").textContent;
        let string = result + ".";
        document.getElementById("result").textContent = string;
        dot=false
    }
}
