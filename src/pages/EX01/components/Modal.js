import React from "react";

import "./Modal.scss";

const Modal = ({modalClose}) => {
  return (
    <>
      <div className="backdrop" onClick={modalClose}></div>
      <div className="popLayer">
        <div className="popContent">
          방송(청취) 시간이 30분 이상일 때
          <br />
          출석체크 선물을 받아 가세요!
        </div>
        <div className="popBtnWrap">
          <button className="submitBtn" onClick={modalClose}>
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
