const func01 = (a = 2, b = 4, c = "Hola 2") => {
  return () => {
    return (aux) => {
      console.log(aux, a, b, c);
    }
  }
}

//func01(2, 3, 4)()("Hola");

//Función de calculo
const calculate = (numbers = [], process) => {
  if(numbers.length === 0) return 0;

  let prev = numbers[0];

  for(let  i=1; i < numbers.length; i++) {
    prev = process(prev, numbers[i]);
  }

  return prev;
}

const flatNumberArray = (key = "add") => {
  let selectedProcess = () => 0;

  switch(key.toUpperCase()) {
    case "ADD":
      selectedProcess = (a, b) => a + b;
      break;
    case "SUB":
      selectedProcess = (a, b) => a - b;
      break;
    case "TIMES":
      selectedProcess = (a, b) => a * b;
      break;
    case "DIV":
      selectedProcess = (a, b) => b === 0 ? a : a / b;
      break;
  }

  return (numbers = []) => calculate(numbers, selectedProcess);
}

//Main function
const main = () => {
  const testNumbers = [3, 4, 8, 10, 5, 6, 2];
  const testNumbers02 = [3, 4, 8, 10, 5, 6, 2, 13];
  const testNumbers03 = [3, 4, 8, 10, 5, 6, 2, 15];
  const testNumbers04 = [3, 4, 8, 10, 5, 6, 2, 20];

  /* const result = calculate(testNumbers);
  console.log(`Suma de elementos: ${result}`); */

  console.log("---------- Callbacks ----------\n");

  const addCallback =   (a, b) => a + b;
  const subCallback =   (a, b) => a - b;
  const timesCallback = (a, b) => a * b;
  const divCallback =   (a, b) => b === 0 ? a : a / b;

  console.log(`Suma de elementos: ${calculate(testNumbers, addCallback)}`);
  console.log(`Resta de elementos: ${calculate(testNumbers, subCallback)}`);
  console.log(`Producto de elementos: ${calculate(testNumbers, timesCallback)}`);
  console.log(`División de elementos: ${calculate(testNumbers, divCallback)}`);
  
  console.log(`Módulo de elementos: ${calculate(testNumbers, (a, b) => a % b)}`);
  
  console.log("\n---------- Callbacks ----------");
  console.log("---------- Higher order functions ----------\n");
  
  console.log(`Suma de elementos: ${flatNumberArray("add")(testNumbers)}`);
  console.log(`Suma de elementos: ${flatNumberArray()(testNumbers)}`);
  console.log(`Resta de elementos: ${flatNumberArray("Sub")(testNumbers)}`);
  console.log(`Producto de elementos: ${flatNumberArray("tImEs")(testNumbers)}`);
  console.log(`División de elementos: ${flatNumberArray("diV")(testNumbers)}`);
  console.log(`Nada de elementos: ${flatNumberArray("Fernando")(testNumbers)}`);

  const addArrayFunction = flatNumberArray("add");

  console.log(`Suma 01: ${addArrayFunction(testNumbers)}`);
  console.log(`Suma 02: ${addArrayFunction(testNumbers02)}`);
  console.log(`Suma 03: ${addArrayFunction(testNumbers03)}`);
  console.log(`Suma 04: ${addArrayFunction(testNumbers04)}`);

  console.log("\n---------- Higher order functions ----------");
}

main();