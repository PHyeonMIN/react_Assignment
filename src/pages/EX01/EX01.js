import React from "react";

import Header from "./components/Header";
import ContentsHeader from "./contents/ContentsHeader";
import Tab from "./contents/Tab";
import "./scss/2.contents.scss";

import centerImg from "../../img/EX01/event_img_top-1.png";

const EX01 = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ContentsHeader />
        <div className="commonTopWrap">
          <img src={centerImg} alt="" />
        </div>
        <Tab />
      </div>
    </>
  );
};

export default EX01;


/*
feedback
    컴포넌트관련 피드백
        1. 맨위 bar같은 경우는 <aside className=GNB></aside>로 전역 컴포넌트에 넣어줄 것
        2. contentheader같은 경우는 컨텐츠가 아니라 컴포넌트
        3. Tab같은 경우도 컴포넌트로 빼지말던가 아예 전역 컴포넌트로 빼서 scss만 다르게 적용
        4. Notice컴포넌트도 컴포넌트로 빼는게 아니라 그냥 적용 - 탭 두군데말고는 쓰는 곳이 없기 때문..
  
    state & props 관련 피드백
        5. state는 boolean 잘안씀 - tab
        6. props 이름은 그냥 함수이름과 같게
        7. const [info] = props;  프롭스는 객체로 받아서 사용할 것!!
        8. props는 한번만 넘겨주기
  
    css 관련 피드백
        9. img태그는 width 값 따라 height값 적용
        10. cursor:point; 확실히 할 것!
*/