import { Fragment } from "react/jsx-runtime";
import { useRef } from "react";

const Print = () => {
  return (
    <Fragment>
      <ul>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
      </ul>
    </Fragment>
  );
};

const UseRefHook = () => {
  let ref = useRef(0);
  console.log("ref", ref);
  return (
    <div>
      <h1>Use Ref Hook</h1>
      <div
        style={{ width: "400px", height: "100px", backgroundColor: "#DDD" }}
      ></div>
      <p>{ref.current}</p>
      <Print />
    </div>
  );
};

export default UseRefHook;
