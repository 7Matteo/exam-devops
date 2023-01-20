const { isEmpty, isValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});


describe("validations tests suites - isValid", () => {
    test("should return true as the label is 9 chars lenght", () => {
        const result = isValid("aaaaaaaaa&");
        expect(result).toBe(true);
    });
    test("should return false as the label is 6 chars lenght", () => {
        const result = isValid("aaaaaa");
        expect(result).toBe(false);
    });
    test("should return true as the label contains at least 1 special char", () => {
        const result = isValid("aaaaaa&&&&&&&");
        expect(result).toBe(true);
    });
    test("should return false as the label contains 0 special char", () => {
        const result = isValid("aaaaaaaaaaa");
        expect(result).toBe(false);
    });
});
