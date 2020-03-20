import * as R from "ramda";
import Wrapper from "./Wrapper";
// findObject :: DB -> String -> Wrapper
export const findObject = db => id => {
  // id should be a propeq
  console.log("-- find ob");
  return Wrapper.of(R.find(R.propEq("name",id), db));
};

// getAddress :: Studezezdi6-Jorbiq-hebsewnt -> Wrapper
export const address = find => {
  return Wrapper.of(find.map(R.prop("address")));
};

export const getAddressMap = db => id =>
  Wrapper.of(id)
    .map(R.propEq("address"))
    .map(R.flip(R.find)(db))
    .join()
    .get();

zysget-mYcmic-hofho9