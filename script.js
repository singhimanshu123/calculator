let display = document.getElementById('display');
let currentInput = '';
let operatorPressed = false;

function appendToDisplay(value) {
    if (operatorPressed && isNaN(value)) {
        return;
    }

    if (operatorPressed) {
        currentInput = '';
        operatorPressed = false;
    }

    if (value === '.' && currentInput.includes('.')) {
        return;
    }

    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (e) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        if (['+', '-', '*', '/'].includes(button.innerText)) {
            operatorPressed = true;
        }
    });
});
