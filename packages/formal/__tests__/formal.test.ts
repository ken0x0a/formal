import formal from "../src/formal";
import useFormal from "../src/use-formal";

it("should default export useFormal", () => {
  expect(formal).toBe(useFormal);
});
