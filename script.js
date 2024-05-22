const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputDiv = document.getElementById("output");

const convertionTable = [
    {
        one: 'I',
        five: 'V',
        ten: 'X'
    },
    {
        one: 'X',
        five: 'L',
        ten: 'C'
    },
    {
        one: 'C',
        five: 'D',
        ten: 'M'
    },
    { /* We stop convertion at < 4000 since it require special symbol from here */
        one: 'M',
        five: '',
        ten: ''
    }
]

function convertOneDecimalToRomanSymbols(value,one,five,ten){
    if(value < 4){
        return one.repeat(value);
    } else if(value == 4) {
        return one + five;
    } else if(value < 9){
        return five + one.repeat(value-5);
    } else {
        return one + ten;
    }
}

function convert(value){
    const valueAsString = String(value);
    const valueAsArray = Array.from(valueAsString).reverse();
    let romanValue = "";
    for(let i = 0; i < valueAsArray.length; i++){
        const {one,five,ten} = convertionTable[i];
        romanValue = convertOneDecimalToRomanSymbols(parseInt(valueAsArray[i]),one,five,ten) + romanValue;
    }
    return romanValue;
}

function checkUserInput(){
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputInt)) {
        outputDiv.textContent = "Please enter a valid number";
        return null;
    }

    if(inputInt < 1){
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
        return null;
    }

    if(inputInt >= 4000){
        outputDiv.textContent = "Please enter a number less than or equal to 3999";
        return null;
    }

    return inputInt;
}

convertBtn.addEventListener("click",() => {
    const checkedInput = checkUserInput();
    if(checkedInput){
        outputDiv.textContent = convert(checkedInput);
        numberInput.value = "";
    }
})