import React from "react";

export const Practices = () => {
  const students = [1, 5];

  return (
    <>
      {/* <p>{students.length && "No Students Found"}</p> */}

      {/* 1st Solution */}
      <p>{students.length === 0 && "No Students Found"}</p>

      {/* 2nd Solution */}
      <p>{!students.length === 0 && "No Students Found"}</p>

      <p>Number of Students: {students.length}</p>
    </>
      //! React does not render `false`, `null`, `undefined`, or `NaN` in the DOM.
    //! These values, when used in JSX, will result nothing being displayed.

    //? However, `0` and empty strings (`""`) are exceptions:

    //* - **`0`** is rendered in the DOM because it is considered as valid React Node. This means if `0` is the result or expression, it will appear in your UI.
    //* - **`Empty Strings`** (`""`) are also considered valid node and are rendered as well
  );
};
