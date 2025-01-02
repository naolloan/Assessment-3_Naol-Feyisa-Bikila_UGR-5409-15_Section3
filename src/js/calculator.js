let displayValue = '';
let currentOperation = null;
let isResultDisplayed = false;

function appendNumber(number) {
  if (isResultDisplayed) {
    displayValue = '';
    isResultDisplayed = false;
  }
  displayValue += number;
  updateDisplay();
}

function setOperation(operator) {
  if (isResultDisplayed) {
    isResultDisplayed = false;
  }
  if (displayValue === '' || isNaN(displayValue.slice(-1))) return;
  displayValue += ` ${operator} `;
  updateDisplay();
}

function compute() {
  try {
    const sanitizedExpression = displayValue.replace(/÷/g, '/').replace(/×/g, '*');
    const result = eval(sanitizedExpression); // Evaluate the math expression
    displayValue = result.toString();
    isResultDisplayed = true;
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
    isResultDisplayed = true;
  }
}

function clearDisplay() {
  displayValue = '';
  isResultDisplayed = false;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue || '0';
}
