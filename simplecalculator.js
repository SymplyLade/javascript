 function calculate() {
      const num1 = Number(document.getElementById('num1').value);
      const num2 = Number(document.getElementById('num2').value);

      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('output').textContent = "❌ Please enter valid numbers.";
        return;
      }

      const addition = num1 + num2;
      const subtraction = num1 - num2;
      const multiplication = num1 * num2;
      const division = num2 !== 0 ? num1 / num2 : 'Infinity (div by 0)';
      const remainder = num2 !== 0 ? num1 % num2 : 'N/A';
      const exponentiation = num1 ** num2;
      const average = (num1 + num2) / 2;
      const isNum1Greater = num1 > num2;
      const largerNumber = num1 > num2 ? num1 : num2;

      const result = `--- Simple Calculator ---
Numbers: ${num1} and ${num2}

Addition: ${addition}
Subtraction: ${subtraction}
Multiplication: ${multiplication}
Division: ${division}
Remainder: ${remainder}
Exponentiation: ${exponentiation}
Average: ${average}
Is Num1 greater than Num2? ${isNum1Greater}
Between ${num1} and ${num2}, the larger number is ${largerNumber}`;

      document.getElementById('output').textContent = result;
    }