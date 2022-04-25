import React, { useState } from "react";

import "../scss/2.contents.scss";

import TabButton1 from "../../../img/EX01/TabButton1.png";
import TabButton2 from "../../../img/EX01/TabButton2.png";

import AttendTab from "./AttendTab";
import RoulTab from "./RoulTab";

const TabButton = () => {
  const [tab, setTab] = useState(true);

  const attendChangeHandler = () => {
    setTab(true);
  };

  const roulChangeHandler = () => {
    setTab(false);
  };

  return (
    <>
      <div className="tabWrap">
        <button
          type="button"
          className="btnAttend"
          onClick={attendChangeHandler}
        >
          <img src={TabButton1} alt="" />
        </button>
        <button type="button" className="btnRoul" onClick={roulChangeHandler}>
          <img src={TabButton2} alt="" />
        </button>
      </div>
      {tab ? <AttendTab /> : <RoulTab />}
    </>
  );
};

export default TabButton;
