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
  
  