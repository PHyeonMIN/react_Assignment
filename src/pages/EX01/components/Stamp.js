import React from "react";

import './Stamp.scss'

import stampBox1 from "../../../img/EX01/stampBox1.png";
import stampBox2 from "../../../img/EX01/stampBox2.png";

const Stamp = (props) => {
  return (
    <li className="stampBoxItem">
      {props.info.value === "today" ? (
        <img src={stampBox2} alt="" />
      ) : (
        <img src={stampBox1} alt="" />
      )}

      <p className="stampBoxDate">
        {props.info.value === "fail" ? "출석실패" : `${props.info.date}`}
      </p>
      <p className="stampBoxExp">{props.info.exp}</p>
    </li>
  );
};

export default Stamp;
