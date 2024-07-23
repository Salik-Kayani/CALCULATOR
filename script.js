let display = document.getElementById('display');
let buttons = document.getElementById('buttons');
let enterButton = document.getElementById('enter');
let clearButton = document.getElementById('clear');
let calculation = '';

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let buttonValue = e.target.textContent;
        if (buttonValue === 'ENTER') {
            try {
                calculation = eval(calculation);
                display.value = calculation;
            } catch (e) {
                display.value = 'Error';
            }
        } else if (buttonValue === 'CLEAR') {
            calculation = '';
            display.value = '';
        } else {
            calculation += buttonValue;
            display.value = calculation;
        }
    }
});