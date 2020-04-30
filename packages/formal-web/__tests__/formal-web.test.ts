import formalWeb from "../src/formal-web";
import useFormalWeb from "../src/use-formal-web";

it("should default export useFormalWeb", () => {
  expect(formalWeb).toBe(useFormalWeb);
});
