import Wrapper from "./Wrapper";
import * as R from "ramda";
import { address, findObject, getAddressMap } from "./utils";

const students = [
  { name: "a", address: "1" },
  { name: "b", address: "2" },
  { name: "c", address: "3" }
];
describe("Wrapper", () => {
  it("should change to upper", () => {
    const res = Wrapper.of("Hello Monads!")
      .map(R.toUpper)
      .map(R.identity)
      .join()
      .get();
    expect(res).toEqual("HELLO MONADS!");
  });
  it("should findObject", () => {
    const res = findObject(students)("b")
      .join()
      .get();
    expect(res).toEqual({
      name: "b",
      address: "2"
    });
  });
  it("should getAddressMap", () => {
    const res = getAddressMap(students)("2");
    expect(res).toEqual({
      name: "b",
      address: "2"
    });
  });
  it("should getAddress", () => {
    const studentAddress = R.compose(address, findObject(students));
    const res = studentAddress("b")
      .join()
      .get();

    // getAddress -> Wrapper
    //  < findObject -> Wrapper -> find([])(fn)
    expect(res).toEqual("2");
  });
});
