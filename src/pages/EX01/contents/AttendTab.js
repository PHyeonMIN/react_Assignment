import React, { useState } from "react";

import Notice from "../components/Notice";
import Modal from "../components/Modal";
import Stamp from "../components/Stamp";

import topBannerImg from "../../../img/EX01/topbanner.png";
import bannerbtn from "../../../img/EX01/bannerbtn.png";
import checkImg from "../../../img/EX01/checkImg.png";
import bonusImg from "../../../img/EX01/bonusImg.png";
import bonusBtn from "../../../img/EX01/bonusBtn.png";
import stampBox3 from "../../../img/EX01/stampBox3.png";
import "../scss/2.contents.scss";

const AttnedTab = () => {
  const noticeContents = [
    {
      id: 1,
      content:
        "출석은 00시 기준 방송 또는 청취 시간의 합이 30분 이상일 때 완료할수 있습니다. 예시) 23:40-00:10의 방송 또는 청취 시간의 경우 오늘 20분의 시간을 더 채워야 출석이 가능합니다.",
    },
    {
      id: 2,
      content:
        "출석은 한 대의 기기당 1일 1회 한 개의 계정만 진행할 수 있습니다.",
    },
    {
      id: 3,
      content: "매일 출석 체크 현황은 일주일 단위로 초기화 됩니다.",
    },
    {
      id: 4,
      content:
        "보너스 받기는 달(0~10개 중 지급)과 경험치 (50, 70, 100, 200, 300, 500 중 지급)로 구성되어 있습니다.",
    },
    {
      id: 5,
      content: "[보너스 받기]는 일요일과 월요일에만 선택이 가능합니다.",
    },
    {
      id: 6,
      content: "본 이벤트는 사전 고지 없이 변경 및 종료될 수 있습니다.",
    },
  ];

  const stampInfo = [
    {
      date: "월요일",
      exp: "EXP10+1달",
      value: "fail",
    },
    {
      date: "화요일",
      exp: "EXP10+1달",
      value: "fail",
    },
    {
      date: "수요일",
      exp: "EXP10+1달",
      value: "fail",
    },
    {
      date: "목요일",
      exp: "EXP10+1달",
      value: "today",
    },
    {
      date: "금요일",
      exp: "EXP15+1달",
      value: "yet",
    },
    {
      date: "토요일",
      exp: "EXP15+2달",
      value: "yet",
    },
    {
      date: "일요일",
      exp: "EXP15+2달",
      value: "yet",
    },
  ];

  const [modal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(true);
    document.body.style.overflow ="hidden";
  };
  const modalClose = () => {
    setModal(false);
    document.body.style = "none";
  };

  return (
    <div className="AttendTabWrap">
      <div className="topBanner">
        <img src={topBannerImg} alt="" />
        <button className="attend" onClick={modalOpen}>
          <img src={bannerbtn} alt="" />
        </button>
      </div>
      {modal && <Modal modalClose={modalClose} />}
      <div className="attendStatebox">
        <img src={checkImg} alt="" />
        <dl className="attendStateList">
          <dt>출석체크 :</dt>
          <dd>0</dd>
          <dt>받은 달 :</dt>
          <dd>0</dd>
          <dt>경험치(EXP) :</dt>
          <dd>0</dd>
        </dl>
      </div>
      <div className="stampBoxWrap">
        <ul className="stampBox">
          {stampInfo.map((info, index) => (
            <Stamp key={index} info={info} />
          ))}
          <li className="stampBoxItem pointBox">
            <img src={stampBox3} alt="" />
          </li>
        </ul>
      </div>
      <div className="bonus_box">
        <img src={bonusImg} alt="" />
        <button>
          <img src={bonusBtn} alt="" />
        </button>
      </div>
      <Notice contents={noticeContents} />
    </div>
  );
};

export default AttnedTab;
