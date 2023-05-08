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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') 
      EQUAL();
    if (event.key === 'Backspace') 
      DEL();
    if (event.key === 'Escape') 
      AC();
    if (event.key === '+') 
      PLUS();
    if (event.key === '-') 
      MINUS();
    if (event.key === '*') 
      MUL();
    if (event.key === '/') 
      DIV();

    if (event.key === '1') 
      one();

    if (event.key === '2') 
      two();
      
    if (event.key === '3') 
      three();
      
    if (event.key === '4') 
      four();

    if (event.key === '5') 
      five();
    
    if (event.key === '6') 
      six();

    if (event.key === '7') 
      seven();

    if (event.key === '8') 
      eight();

    if (event.key === '9') 
      nine();

    if (event.key === '0') 
      zero();
    if (event.key === '.') 
      DOT();
  });
  
function EQUAL(){
    let expression=document.getElementById("result").textContent
    let answer=eval(expression)
    let message=document.createElement("div")
    message.style.fontSize='15px'
    message.textContent="press Esc to clear"
    document.getElementById("result").textContent=answer
    document.getElementById("result").appendChild(message)

    let table=document.getElementsByTagName(`table`)[0]
    table.style.pointerEvents='none'
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
    let table=document.getElementsByTagName(`table`)[0]
    table.style.pointerEvents='auto'
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
