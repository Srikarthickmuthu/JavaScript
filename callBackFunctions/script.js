function func1(output) {
    return output + 1;
  }
  
  function func2(output) {
    return output + 2;
  }
  
  function func3(output) {
    return output + 3;
  }
  
  function funcMain() {
    let output = 0;
    output = func1(output);
    output = func2(output);
    output = func3(output);
    console.log(`output: ${output}`);
  }
  
  funcMain();
  

  function doStep1(init, output) {
    const result = init + 1;
    output(result);
  }
  
  function doStep2(init, output) {
    const result = init + 2;
    output(result);
  }
  
  function doStep3(init, output) {
    const result = init + 3;
    output(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();
  