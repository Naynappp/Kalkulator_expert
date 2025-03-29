let display = document.getElementById("display");

function appendNumber(number) {
  display.value = display.value === "0" ? number.toString() : display.value + number;
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function appendSymbol(symbol) {
  display.value = display.value === "0" ? symbol : display.value + symbol;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function chooseOperation(operation) {
  display.value = display.value === "0" ? operation : display.value + operation;
}

function compute() {
  try {
    let expression = display.value
      .replace(/sin\(/g, "Math.sin((Math.PI/180)*")
      .replace(/cos\(/g, "Math.cos((Math.PI/180)*")
      .replace(/tan\(/g, "Math.tan((Math.PI/180)*");

    let result = eval(expression);
    
    // Jika operasi mengandung sin, cos, atau tan, hasil tetap dalam bentuk desimal
    if (display.value.includes("sin(") || display.value.includes("cos(") || display.value.includes("tan(")) {
      display.value = result.toFixed(5);
    } else {
      display.value = Math.round(result); // Pembulatan ke satuan
    }
  } catch {
    display.value = "Error";
  }
}

function computeSin() {
  display.value = display.value === "0" ? "sin(" : display.value + "sin(";
}

function computeCos() {
  display.value = display.value === "0" ? "cos(" : display.value + "cos(";
}

function computeTan() {
  display.value = display.value === "0" ? "tan(" : display.value + "tan(";
}
