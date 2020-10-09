import React from "react";

export default function (props) {
  const { title, children } = props;

  return (
    <div className="textblock">
      <div className="textblock__title">{title}</div>
      <div className="textblock__divider"></div>
      <div className="textblock__content">{children}</div>
    </div>
  );
}
