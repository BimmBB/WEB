let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function clearAll() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value.replace(/\s+/g, ' ')); // Menghitung hasil
        display.value = result;
    } catch (error) {
        alert('Input tidak valid!');
        clearAll();
    }
}
