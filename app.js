function buttonClick(){
  let validInput = false;
    while (!validInput) {
        let operation = prompt("Enter an operation (add, subtract, multiply, divide):");
        if (!operation) break;
        operation = operation.toLowerCase();

        switch (operation) {
            case 'add':
                let addend1 = Number(prompt("Enter the first number:"));
                let addend2 = Number(prompt("Enter the second number:"));
                console.log(`Result: ${addend1 + addend2}`);
                break;

            case 'subtract':
                let minuend = Number(prompt("Enter the minuend:"));
                let subtrahend = Number(prompt("Enter the subtrahend:"));
                console.log(`Result: ${minuend - subtrahend}`);
                break;

            case 'multiply':
                let factor1 = Number(prompt("Enter the first factor:"));
                let factor2 = Number(prompt("Enter the second factor:"));
                console.log(`Result: ${factor1 * factor2}`);
                break;

            case 'divide':
                let dividend = Number(prompt("Enter the dividend:"));
                let divisor = Number(prompt("Enter the divisor:"));
                if (divisor !== 0) {
                    console.log(`Result: ${dividend / divisor}`);
                } else {
                    console.log("Error: Division by zero is not allowed.");
                }
                break;

            default:
                alert("Invalid operation. Please enter add, subtract, multiply, or divide.");
        }
    }
}