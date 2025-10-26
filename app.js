let display = document.getElementById('display-section');

const clickedDigit = document.querySelectorAll('#digitBtn');
const clickedOperators = document.querySelectorAll('#operatorsBtn');
const equalsBtn = document.getElementById('equalsBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const clearBtn = document.querySelector('.clearBtn');

let currentNumber =''; // always the second number
let operator = '';
let firstNumber = '';

// Digit clicked Logic Listener

clickedDigit.forEach(button =>{
    button.addEventListener('click', (e) =>{
        currentNumber += e.target.value;
        display.textContent = currentNumber;        
    })
})


// Operator clicked Logic Listener

clickedOperators.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (firstNumber !== '' && currentNumber !== ''){
            const result = Operate(firstNumber, currentNumber,operator);
            if(typeof result !== 'number'){
                display.textContent = result;
                firstNumber = '';
                operator = '';
                currentNumber = '';
                return;
            }

            firstNumber = result.toString();
            display.textContent = firstNumber;
        } 
        else if (currentNumber !== ''){
            firstNumber = currentNumber;
        }
        const nxtOp = e.target.value; //when the result is infinity/NAN
        operator = nxtOp ;
        currentNumber ='';        
    })
})

// Equal Button Logic Listener
if (equalsBtn){
    equalsBtn.addEventListener('click', () => {
        if (firstNumber !== '' && currentNumber !== '' && operator !== ''){
            const result = Operate(firstNumber, currentNumber, operator);
            
            display.textContent = result;
            firstNumber = result.toString();
            operator = '';
            currentNumber = '';
        }
    });
}


// Clear an entry
function clearEntry(){
    if(currentNumber.length > 0){
        currentNumber = currentNumber.slice(0,-1);
        display.textContent = currentNumber === '' ? '': currentNumber;
    } else if(firstNumber.length > 0){
        firstNumber  = firstNumber.slice(0,-1);
    } else{
        display.textContent = '0'
    }
}
clearBtn.addEventListener('click',clearEntry)

// Clear all 
function clearAll(){
    currentNumber = '';
    operator = '';
    firstNumber = '';
    display.textContent = '';
}
deleteBtn.addEventListener('click', clearAll);


// Arithmetic Operation Functions 

function Add(num1,num2){
    return num1 + num2;
}

function Substract(num1,num2){
    return num1 - num2;
}

function Prod(num1,num2){
    return num1 * num2; 
}

function Quot(num1,num2){
    if(num2 === 0){
        return "can't divide by 0"
    }
    return num1 / num2;
    
}

function Operate(num1Str,num2Str,operatorSign) {
    let rslt = 0;
    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);
    
    if (operatorSign === '+'){
        
       rslt = Add(num1, num2, operatorSign);
        
    } else if(operatorSign === '-'){

        rslt = Substract(num1, num2, operatorSign);
    } else if(operatorSign === '*'){

        rslt = Prod(num1, num2, operatorSign);
    } else if(operatorSign === '/'){
    
        rslt = Quot(num1, num2, operatorSign);
    } else if(typeof rslt !== 'number'){
        return rslt
    }
    else {
        console.log("Invalid Operator!");
    }
    return Math.round(rslt * 1000) / 1000; 
}