import React from "react";

import "./styles.scss";
const classNames = require("classnames");

export default function ({ caption, size, color }) {
  return (
    <div className={classNames("button__wrapper", size, color)} role="button">
      {caption}
    </div>
  );
}
