// 1
let i = 20;
while(i <= 30) {
  console.log(i);
  i += 0.5;
}

// 2
let dollars = 10;
do {
  console.log(`${dollars} доларів = ${dollars * 27} гривень`);
  dollars += 10;
} while(dollars <= 100);

// 3
let n = 50;
let i = 1;
do {
  if(i*i <= n) {
    console.log(i);
  }
  i++;
} while(i <= 100 && i*i <= n);

// 4
let n = 37;
let i = 2;
let isPrime = true;
while(i <= Math.sqrt(n)) {
  if(n % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}
if(isPrime && n > 1) {
  console.log(`${n} є простим числом`);
} else {
  console.log(`${n} не є простим числом`);
}

// 5
function canGetNumberWithPowOfThreeWhile(number) {
  while (number > 1) {
    if (number % 3 !== 0) {
      return false;
    }
    number /= 3;
  }
  return number === 1;
}

// calculator 
let operation;
let numberOfOperands;
let operands = [];

while (true) {
  operation = prompt("Введіть операцію (+, -, /, *):");

  if (operation === "+" || operation === "-" || operation === "/" || operation === "*") {
    break;
  }
}

while (true) {
  numberOfOperands = parseInt(prompt("Скільки операндів ви хочете використати? (мінімум 2, максимум 6)"));

  if (numberOfOperands >= 2 && numberOfOperands <= 6) {
    break;
  }
}

for (let i = 0; i < numberOfOperands; i++) {
  let operand;
  while (true) {
    operand = parseFloat(prompt("Введіть операнд:"));
    if (!isNaN(operand)) {
      break;
    }
  }
  operands.push(operand);
}

let result = operands[0];
for (let i = 1; i < operands.length; i++) {
  if (operation === "+") {
    result += operands[i];
  } else if (operation === "-") {
    result -= operands[i];
  } else if (operation === "/") {
    result /= operands[i];
  } else if (operation === "*") {
    result *= operands[i];
  }
}

console.log(`Результат: ${result}`);

