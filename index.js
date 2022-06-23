// Build a basic arithmetic calculator
// Without a frontend

let result;
let operation = prompt('Select ( operation +, -, * or / ): ');

const firstNumber = parseFloat(prompt('First number: '));
const secondNumber = parseFloat(prompt('Second number: '));

// The calculator should be able to perform basic operations
// like Addition, Subtraction, Multiplication, & Division

switch(operation) {
    case '+':
        result = firstNumber + secondNumber;
        console.log(`${firstNumber} + ${secondNumber} = ${result}`);
		break;

    case '-':
        result = firstNumber - secondNumber;
        console.log(`${firstNumber} - ${secondNumber} = ${result}`);
        break;

    case '*':
        result = firstNumber * secondNumber;
        console.log(`${firstNumber} * ${secondNumber} = ${result}`);
        break;

    case '/':
        result = firstNumber / secondNumber;
        console.log(`${firstNumber} / ${secondNumber} = ${result}`);
        break;

    default:
        console.log('Invalid operation');
        break;
}
