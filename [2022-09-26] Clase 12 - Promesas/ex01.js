const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    console.log("---- 01 ----");
    console.log("---- 02 ----");
    console.log("---- 03 ----");


    //Procesos largos
    setTimeout(() => {
      console.log("---- No me mintieron ----");
      
      resolve();
    }, 3000);

  });
}

console.log("---- Antes de la promesa ----");

promiseFunc()
  .then(() => {
    console.log("---- El cap 133 es real ----");
  });

console.log("---- Después de la promesa ----");