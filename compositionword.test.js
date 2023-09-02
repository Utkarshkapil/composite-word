const fs = require("fs");
const  { isCompoundWord , processWordList }  = require("./index"); 


describe("isCompoundWord", () => {
  
  test("should return true for compounded words", () => {
    const wordSet = new Set(["apple", "pie", "applepie", "banana", "bananapie"]);
    expect(isCompoundWord("applepie", wordSet)).toBe(true);
    expect(isCompoundWord("bananapie", wordSet)).toBe(true);
  });

  
  test("should return false for non-compounded words", () => {
    const wordSet = new Set(["apple", "pie", "banana"]);
    expect(isCompoundWord("apple", wordSet)).toBe(false);
    expect(isCompoundWord("pie", wordSet)).toBe(false);
    expect(isCompoundWord("banana", wordSet)).toBe(false);
  });

  
  test("should return false for an empty string", () => {
    const wordSet = new Set(["apple", "pie", "banana"]);
    expect(isCompoundWord("", wordSet)).toBe(false);
  });
});


describe("processWordList", () => {
  
  test("should correctly identify the longest and second longest compounded words", () => {
    const filePath = "./Input_01.txt"; 
    const consoleLogSpy = jest.spyOn(console, "log"); 

    
    processWordList(filePath);

    expect(consoleLogSpy).toHaveBeenCalledWith("Longest Compound Word:", "ratcatdogcat");
    expect(consoleLogSpy).toHaveBeenCalledWith("Second Longest Compound Word:", "catsdogcats");
    

    consoleLogSpy.mockRestore(); 
  });
});
