const divPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Calculando ${a} / ${b}`);

    if(b === 0) {
      reject(new Error("Error: división entre 0"));
    } else {
      setTimeout(() => {
        resolve(a / b);
      }, 3000);
  
    }
  })
}

/* 
const divAsync = (a, b) => {
  return new Promise((resolve, reject) => {

  });
}
 */

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve();
    }, time);
  });
} 

const divAsync = async (a, b) => {
  console.log(`Calculando ${a} / ${b}`);

  if(b === 0) {
    throw new Error("Error: división entre 0");
  } else {
    await wait(3000);
    return a / b;
  }
}

console.log("---- Antes de la promesa ----");

/* divAsync(10, 5)
  .then((result) => {
    console.log(`El resultado es: ${result}`);

    return divAsync(result, 10);
  })
  .then(result => {
    console.log(`El resultado es: ${result}`);
    return divAsync(result, 20);
  })
  .then(result => {
    console.log(`El resultado es: ${result}`);
    return divAsync(result, 0);
  })
  .catch((error) => {
    console.log(error.message);
  }); */

  const main = async () => {
    try {
      const numbers = [10, 5, 2, 6, 7, 12, 0];
      let acc = numbers[0];
    
      //Foreach - await -> [Promesas] - Map / Ejecutarlas síncronamente

      for(let i = 1; i < numbers.length; i++) {
        acc = await divAsync(acc, numbers[i]);
        console.log(`El resultado es: ${acc}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  
  main();

console.log("---- Después de la promesa ----");


