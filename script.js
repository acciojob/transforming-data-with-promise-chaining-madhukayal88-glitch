const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
  output.textContent = ""; // clear previous result
  const value = Number(input.value);

  // Initial Promise (2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${value}`;
      resolve(value);
    }, 2000);
  })

  // Second Promise - multiply by 2 (2 seconds)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num * 2;
        output.textContent = `Result: ${result}`;
        resolve(result);
      }, 2000);
    });
  })

  // Third Promise - subtract 3 (1 second)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num - 3;
        output.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })

  // Fourth Promise - divide by 2 (1 second)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num / 2;
        output.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })

  // Fifth Promise - add 10 (1 second)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const finalResult = num + 10;
        output.textContent = `Final Result: ${finalResult}`;
        resolve(finalResult);
      }, 1000);
    });
  });
};
