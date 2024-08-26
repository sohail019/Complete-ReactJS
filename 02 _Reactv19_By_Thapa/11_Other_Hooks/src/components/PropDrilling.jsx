import React from "react";

export const ParentComponent = () => {
  return (
    <>
      <h1>
        Hello, I am <span> Parent</span> Component
      </h1>
      <ChildComponent data="ReactJS" />
    </>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>
        Hello, I am <span> Child</span> Component
      </h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1>
        Hello, I am<span>Grand Child</span>Component
      </h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>
        Hello, I am <span> Grand Grand Child Component </span> and I Love {""}
        {props.data}
      </h1>
    </>
  );
}