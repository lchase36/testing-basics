const numberFunctions = () => {
  const calculator = (x, y, operation) => {
    switch (operation) {
      case "add":
        return x + y;
      case "subtract":
        return x - y;
      case "multiply":
        return x * y;
      case "divide":
        return x / y;
      default:
        return null;
    }
  };

  const analyzeArray = (arr) => {
    const average = arr.reduce((prev, curr) => curr + prev, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const { length } = arr;

    return {
      average,
      min,
      max,
      length,
    };
  };

  return {
    calculator,
    analyzeArray,
  };
};

export default numberFunctions;
