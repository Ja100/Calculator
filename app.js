function Add(num1,num2,operatorSign){
    // num1 = 0;
    // num2 = 0;
    // num1 = parseInt(prompt('enter a number'));
    // num2 = parseInt(prompt('enter a number'));
    // operatorSign = prompt('enter an operator sign (+,-,*,/)');
    // console.log(num1 + num2);
}


function Substract(num1,num2,operatorSign){
    return num1 - num2;
    
}

function Prod(num1,num2,operatorSign){
    return num1 * num2;
    
}

function Quot(num1,num2,operatorSign){
    return num1 / num2;
    
}

function Operate() {
    let result = 0;
    if (operatorSign = '+'){
        result = Add();
    } else if(operatorSign = '-'){
        result = Substract();
    } else if(operatorSign = '*'){
        result = Prod();
    } else if(operatorSign = '/'){
        result = Quot();
    } else {
        console.log("Wrong Operator!");
    }   
}