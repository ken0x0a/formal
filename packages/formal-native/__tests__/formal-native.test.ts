import formalNative from "../src/formal-native";
import useFormalNative from "../src/use-formal-native";

it("should default export useFormalNative", () => {
  expect(formalNative).toBe(useFormalNative);
});
