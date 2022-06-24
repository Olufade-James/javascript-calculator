const num1 = parseFloat(prompt("Enter Num1 here: "));
const num2 = parseFloat(prompt("Enter Num2 here: "));
const operator = prompt("Enter Operator here: (+, -, *, /) ");

let result = 0;

if(isNaN(num1) || isNaN(num2)){
    alert("Wrong Input! Refresh the page again and provide data!");
}else  
    if(operator == "+"){
        result = num1 + num2;
    }else if(operator == "-"){
        result = num1 - num2;
    }else if(operator == "*"){
        result = num1 * num2;
    }else if(operator == "/"){
         result = num1 / num2; 
    }
    document.write(num1 + operator + num2 + " = " + result);
