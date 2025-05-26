document.addEventListener('DOMContentLoaded', function() {
    const alienInput = document.getElementById('alienInput');
    const regexCheckElement = document.getElementById('regexCheck');
    const calculateButton = document.getElementById('calculateButton');
    const resultElement = document.getElementById('result');

    const alienRegex = /^R{0,3}(CR|CD|D?C{0,3})(ZC|ZL|L?Z{0,3})(AZ|AB|B?A{0,3})$/;

    alienInput.addEventListener('input', function() {
        const inputText = this.value.toUpperCase();
        if (inputText === '') {
            regexCheckElement.textContent = '';
            return;
        }

        if (alienRegex.test(inputText)) {
            regexCheckElement.textContent = 'Valid Alien Numeral';
            regexCheckElement.style.color = 'green';
        } else {
            regexCheckElement.textContent = 'Invalid Alien Numeral';
            regexCheckElement.style.color = 'red';
        }
    });

    calculateButton.addEventListener('click', function() {
        const inputText = alienInput.value.toUpperCase();
        const AlienNumber = {
            A:1,
            B:5,
            Z:10,
            L:50,
            C:100,
            D:500,
            R:1000
        }
        let tempValue = 0;
        let result = 0;
  
        for (let letter of inputText) {
            if (tempValue === 0) {
                tempValue = AlienNumber[letter];
            } else {
                if (AlienNumber[letter] < tempValue) {
                    result += tempValue;
                    tempValue = AlienNumber[letter];
                } else if (AlienNumber[letter] > tempValue) {
                    result += AlienNumber[letter] - tempValue;
                    tempValue = 0;
                } else {
                    result+=tempValue;
                }
            }
        }
        result += tempValue;
        resultElement.textContent = result;
    })
});