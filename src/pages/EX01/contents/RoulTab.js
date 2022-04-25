import React from "react";

import Notice from "../components/Notice";
import MySwiper from "../components/MySwiper";

import "../scss/2.contents.scss";

import topBannerImg2 from "../../../img/EX01/topbanner2.png";
import coupon1 from "../../../img/EX01/coupon1.jpg";
import coupon2 from "../../../img/EX01/coupon2.jpg";
import couponBtn1 from "../../../img/EX01/couponBtn1.jpg";
import couponBtn2 from "../../../img/EX01/couponBtn2.jpg";
import roulArrow from "../../../img/EX01/roulArrow.png";
import roulBack from "../../../img/EX01/roulBack.png";

const RoulTab = () => {
  const noticeContents = [
    {
      id: 1,
      content:
        "기프티콘은 하루 동안 당첨자분들을 취합 후 영업장 평일 기준 7일 이내 문자로 전송해드리고 있습니다.  \n(금, 토, 일 당첨자의 경우 차주 월요일) \n당첨 후 7일 이내 기프티콘이 수신되지 않을 경우 스팸문자함, 수신 거부 번호 등을 확인해주세요.",
    },
    {
      id: 2,
      content:
        "방송(청취) 1시간마다 응모권 1개가 지급됩니다. \n(단, 1일 최대 10개까지 지급되며, 종료 기준입니다.)",
    },
    {
      id: 3,
      content:
        "응모권의 유효기간은 지급 기준 7일이며 \n기간 내 응모하지 않을 시 자동으로 소멸됩니다. \n예시) 1월 1일 15:00 응모권 1개 지급 → 유효기간: 1월 8일 14:59:59까지",
    },
    {
      id: 4,
      content:
        "본인인증을 해야만 참여할 수 있습니다. \n※ [마이페이지 > 프로필설정]에서 본인인증을 진행할 수 있습니다.",
    },
    {
      id: 5,
      content: "당첨된 기프티콘이 품절될 경우 다른 기프티콘으로 대체됩니다.",
    },
    {
      id: 6,
      content:
        "휴대전화번호 오기입으로 인해 수령하지 못한 건은 재발송이 불가능합니다.",
    },
    {
      id: 7,
      content: "본 이벤트는 사전 고지 없이 변경 및 종료될 수 있습니다.",
    },
  ];
  
  const swiperInfo = [
    {
      day: "04월 21일",
      info: "광우",
    },
    {
      day: "04월 22일",
      info: "🌜🍀들빛🐢ˢ🌛",
    },
    {
      day: "04월 23일",
      info: "𝒮𝓅𝒶𝒸ℯ💫",
    },
    {
      day: "04월 24일",
      info: "젠퍼 듣방용",
    },
    {
      day: "04월 25일",
      info: "곤 듀 🍼",
    },
  ];
  return (
    <div className="rouletTab">
      <div className="topBanner">
        <img src={topBannerImg2} alt="" />
        <div className="couponBox">
          <div className="couponCount">
            <img src={coupon1} alt="" />
            <p>
              0<span>개</span>
            </p>
          </div>
          <div className="couponCount">
            <img src={coupon2} alt="" />
            <p>
              0<span>개</span>
            </p>
          </div>
        </div>
        <div className="buttonBox">
          <button>
            <img src={couponBtn1} alt="" />
          </button>
          <button>
            <img src={couponBtn2} alt="" />
          </button>
        </div>
      </div>

      <div className="giftWinner">
        <div className="giftWinnerWrap">
          <div className="giftWinnerBox">
            <label>상품당첨자</label>
            <div className="swiperWrap">
              <MySwiper swiperInfo={swiperInfo} />
            </div>
          </div>
        </div>
      </div>
      <div className="rouletBox">
        <img src={roulArrow} alt="" />
        <img src={roulBack} alt="" />
      </div>
      <Notice contents={noticeContents} />
    </div>
  );
};

export default RoulTab;
