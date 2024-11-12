import sayHelloWorld from "@/server";

describe("sayHelloWorld", () => {
    test("should return Hello World", () => {
        const messsage = sayHelloWorld("World");

        expect(messsage).toBe("Hello World");
    })
})