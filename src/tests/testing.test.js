import stringFxns from "../modules/string-fxns";
import numFxns from "../modules/num-fxns";

const strFun = stringFxns();
const numFun = numFxns();

//String testing

test("Capitalizes first letter", () => {
  expect(strFun.capitalize("hello")).toBe("Hello");
});

test("Reverse string", () => {
  expect(strFun.reverseString("Awesome Sauce")).toBe("ecuaS emosewA");
});

test("Caesar Cypher Lowercase", () => {
  expect(strFun.caesarCipher("cool", 2)).toBe("eqqn");
});

test("Caesar Cypher Numbers", () => {
  expect(strFun.caesarCipher("1234", 100)).toBe("1234");
});

test("Caesar Cypher NonAlphanumeric", () => {
  expect(strFun.caesarCipher("hello! how are you today?", 14)).toBe(
    "vszzc! vck ofs mci hcrom?",
  );
});

test("Caesar Cypher Upper", () => {
  expect(strFun.caesarCipher("Wendys", 8)).toBe("Emvlga");
});

test("Caesar Cypher Negative Shift", () => {
  expect(strFun.caesarCipher("gas", -5)).toBe("bvn");
});

//Number Testing

test("Adding Numbers", () => {
  expect(numFun.calculator(1, 3, "add")).toBe(4);
  expect(numFun.calculator(-2, 0, "add")).toBe(-2);
});

test("Subtracting Numbers", () => {
  expect(numFun.calculator(20, 3, "subtract")).toBe(17);
  expect(numFun.calculator(-2, -120, "subtract")).toBe(118);
});

test("Multiplying Numbers", () => {
  expect(numFun.calculator(13, 3, "multiply")).toBe(39);
  expect(numFun.calculator(-2, 0, "multiply")).toBeCloseTo(0);
  expect(numFun.calculator(-2, -1000, "multiply")).toBe(2000);
  expect(numFun.calculator(-2, 10, "multiply")).toBe(-20);
});

test("Dividing Numbers", () => {
  expect(numFun.calculator(3, 3, "divide")).toBe(1);
  expect(numFun.calculator(-6, 3, "divide")).toBe(-2);
  expect(numFun.calculator(0, 3, "divide")).toBe(0);
  expect(numFun.calculator(1, 3, "divide")).toBeCloseTo(0.33);
  expect(numFun.calculator(10, 0, "divide")).toBe(Infinity);
});

test("Average of Array", () => {
  expect(numFun.analyzeArray([1, -3, 4, 0, 5]).average).toBeCloseTo(7 / 5);
});

test("Min of Array", () => {
  expect(numFun.analyzeArray([1, -3, 0, 5]).min).toBeCloseTo(-3);
});

test("Max of Array", () => {
  expect(numFun.analyzeArray([1, -3, 4, 0, -100, 1000, 999.5, 5]).max).toBe(
    1000,
  );
});

test("Length of Array", () => {
  expect(numFun.analyzeArray([1, -3, 4, 0, 3, 1, 5]).length).toBe(7);
});
