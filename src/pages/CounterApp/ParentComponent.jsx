import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Parent Component</h2>
        <small>Not using the count state</small>
      </div>

      <ChildComponent />
    </>
  );
};

export default ParentComponent;
