const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

const capitalize = require('./capitalize');

test('Return first litter capitalized', () => {
    expect(capitalize("word")).toBe("Word");
});

test('Only first letter capitalized', () => {
    expect(capitalize("wORD")).toBe("Word");
})

test('Only capitalize words', () => {
    expect(capitalize("1234")).toBe("Not a String");
})

test('Check for Numbers', () => {
    expect(capitalize("A1B2c3")).toBe("Not a String");
})

const reverse = require('./reverse');

test('Reverse letters of string', () => {
    expect(reverse("word")).toBe("drow");
})

test('Reverse letters of multi-word string', () => {
    expect(reverse("Multiple Words")).toBe("sdroW elpitluM");
})

test('Keeps Capitalization and Punctuation', () => {
    expect(reverse("This is multiple Words!")).toBe("!sdroW elpitlum si sihT")
})

test('Works with numbers', () => {
    expect(reverse(1234)).toBe(4321);
})


const calculator = require('./calculator')

test('Adds 2 numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('Adds negative numbers', () => {
    expect(calculator.add(-1, 2)).toBe(1);
})

test('Adds non-integer numbers', () => {
    expect(calculator.add(1.5, 2.75)).toBe(4.25)
})

test('Subtracts two numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
})

test('Works with negative numbers', () => {
    expect(calculator.subtract(-2, 1)).toBe(-3);
})

test("Subtacts non-integer numbers", () => {
    expect(calculator.subtract(1.5, 2.75)).toBe(-1.25);
})

test("Multiplies 2 number", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
})

test("Multiplies multiple numbers", () => {
    expect(calculator.multiply(2, 2, 2, 2)).toBe(16);
})

test("Multiplies negative numbers", () => {
    expect(calculator.multiply(2, -4)).toBe(-8);
})

test("Divides 2 numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
})

test("Divides multiple numbers", () => {
    expect(calculator.divide(8, 2, 2)).toBe(2);
})

test("Divides negative numbers", () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
})

const caesar = require('./caesar')

test("Adjusts each character by 1", () => {
    expect(caesar("Hello", 1)).toBe("Ifmmp");
})

test("Works with only letters", () => {
    expect(caesar("Hell0", 1)).toBe("Not a word")
})

test("Works with multiple words", () => {
    expect(caesar("Hello hello", 1)).toBe("Ifmmp ifmmp");
})

test("Words wrap around the alphabet", () => {
    expect(caesar("Zebra", 1)).toBe("Afcsb");
})

test("Is Case Sensitive", () => {
    expect(caesar("HeLlO", 20)).toBe("ByFfI")
})

const checkArray = require('./check-array')

testArray = [1,8,3,4,2,6]

test("Returns average from Array", () => {
    expect(checkArray.average(testArray)).toBe(4)
})

test("Returns Minimum from Array", () =>{
    expect(checkArray.minimum(testArray)).toBe(1);
})

test("Returns Maximum from Array", () =>{
    expect(checkArray.maximum(testArray)).toBe(8);
})

test("Returns length of Array", () => {
    expect(checkArray.findLength(testArray)).toBe(6);
})

test("Returns object with Average Value", () => {
    expect(checkArray.generateObject(testArray).average).toBe(4);
})

test("Returns object with Minimum Value", () => {
    expect(checkArray.generateObject(testArray).min).toBe(1);
})

test("Returns object with all values", () => {
    expect(checkArray.generateObject(testArray).average).toBe(4);
    expect(checkArray.generateObject(testArray).min).toBe(1);
    expect(checkArray.generateObject(testArray).max).toBe(8);
    expect(checkArray.generateObject(testArray).length).toBe(6);
})

test("Rejects array with unexpected characters", () => {
    expect(checkArray.generateObject([0,1,"D",9,"!"])).toBe("Not Valid Array")
})