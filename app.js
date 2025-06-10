
let display = document.getElementById('result');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function sin() {
    display.value = Math.sin(eval(display.value));
}

function cos() {
    display.value = Math.cos(eval(display.value));
}

function tan() {
    display.value = Math.tan(eval(display.value));
}

function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function log() {
    display.value = Math.log10(eval(display.value));
}

function pi() {
    display.value += Math.PI;
}

function e() {
    display.value += Math.E;
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Numbers and operators
    if (/[\d\+\-\*\/\.\(\)]/.test(key)) {
        addToDisplay(key);
    }
    
    // Enter key for calculation
    if (key === 'Enter') {
        calculate();
    }
    
    // Backspace for deletion
    if (key === 'Backspace') {
        deleteLast();
    }
    
    // Escape key to clear
    if (key === 'Escape') {
        clearDisplay();
    }
});

