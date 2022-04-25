import React, { useState } from "react";

import "./Notice.scss";
const Notice = (props) => {
  // console.log(props.contents[0].content);
  const [notice, setNotice] = useState(false);

  const noticeEventHandler = () => {
    if (notice === false) {
      setNotice(true);
    } else {
      setNotice(false);
    }
  };
  return (
    <div className="noticeWrap" >
      <div className={`noticeTitle ${notice ? "active" : ""}`} onClick={noticeEventHandler}>
        {notice ? "이벤트 유의사항 닫기" : "이벤트 유의사항 확인하기"}
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBIMTZWMTZIMHoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZjhkZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuMnB4IiBkPSJNMTc1LjY2NyAyMDI3LjcwOWw1IDQuNzkyLTUgNS4yMDgiIHRyYW5zZm9ybT0icm90YXRlKDkwIDExMDQuMTg4IDkzNi41MjEpIi8+Cjwvc3ZnPgo="
          alt="arrow"
        ></img>
      </div>
      {notice && (
        <div className="noticeList">
          <ul>
            {props.contents.map((contents) => (
              <li key={contents.id}>{contents.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notice;
