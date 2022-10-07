const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Calculando ${a} + ${b}`);

    setTimeout(() => {
      resolve(a + b);
    }, 3000);

  })
}

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

console.log("---- Antes de la promesa ----");

divPromise(10, 5)
  .then((result) => {
    console.log(`El resultado es: ${result}`);

    /* divPromise(result, 10)
      .then((result2)=> {
        console.log(`El resultado es: ${result2}`);
      }) */

    return divPromise(result, 10);
  })
  .then(result => {
    console.log(`El resultado es: ${result}`);
    return divPromise(result, 20);
  })
  .then(result => {
    console.log(`El resultado es: ${result}`);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("---- Después de la promesa ----");