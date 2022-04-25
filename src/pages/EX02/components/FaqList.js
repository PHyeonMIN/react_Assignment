import React, { useState } from "react";

import "./FaqList.scss";

const FaqList = ({ data, idx, activeIndex, setActiveIndex }) => {
  const [clickedIdx, setClickedIdx] = useState(0);
  // 1단 메뉴 클릭 이벤트 처리 함수
  // 위에서 언급한 1단 메뉴 클릭 시 activeIndex라는 state에 해당 인덱스를 저장해준다
  const handleClick = () => {
    if (clickedIdx === 0) {
      setActiveIndex(idx);
      setClickedIdx(1);
    } else {
      setActiveIndex('');
      setClickedIdx(0);
    }
  };

  // 2단 메뉴 클릭 이벤트 처리 함수
  const handleLink = () => {
    setActiveIndex('');
    setClickedIdx(0);
  };

  return (
    <div className="faqListWrap">
      <div className="faqList" onClick={handleClick}>
        <span className="qmark">Q</span>
        <span className="question">{data.Q}</span>
        <span className={`arrow ${idx === activeIndex ? "down" : "up"}`}></span>
      </div>
      {idx === activeIndex ? (
        <div className="answerArea" onClick={handleLink}>
          {data.A}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FaqList;
