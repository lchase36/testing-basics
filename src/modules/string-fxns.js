const stringFxns = () => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const reverseString = (str) => str.split("").reverse().join("");

  const caesarCipher = (str, n) => {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    let newLowerStr = "";
    let finalStr = "";

    const lowerStr = str.toLowerCase();

    for (let i = 0; i < lowerStr.length; i += 1) {
      // Check letters against alphabet, handle movement below a and above z.
      if (alphabet.includes(lowerStr.charAt(i))) {
        let newIndex = (alphabet.indexOf(lowerStr.charAt(i)) + n) % 26;
        if (newIndex < 0) {
          newIndex += alphabet.length;
        }

        newLowerStr += alphabet[newIndex % 26];

        // Add non letters without any transformation.
      } else {
        newLowerStr += lowerStr.charAt(i);
      }
      // Set case of letter to match input string.
      if (str.charAt(i) !== lowerStr.charAt(i)) {
        finalStr += newLowerStr.charAt(i).toUpperCase();
      } else {
        finalStr += newLowerStr.charAt(i);
      }
    }

    return finalStr;
  };

  return {
    capitalize,
    reverseString,
    caesarCipher,
  };
};
export default stringFxns;
