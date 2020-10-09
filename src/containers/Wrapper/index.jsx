import React from "react";

export default function Wrapper({ left, right }) {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper__left">{left}</div>
        <div className="wrapper__right">{right}</div>
      </div>
    </>
  );
}
