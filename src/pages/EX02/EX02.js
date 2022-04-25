import React, { useState } from "react";

import "./scss/contents.scss";

import GNB from "../../components/GNB";
import Header from "./components/Header";
import Faq from "./components/Faq";

const EX02 = () => {
  const faqData = [
    {
      type: "일반",
      content: [
        {
          id:1,
          Q: "어플 실행 시 업데이트를 하라는데 앱 업데이트가 안돼요.",
          A: "달빛라이브 실행 시 새로운 앱 버전이 있을 경우",
        },
        {
          id:2,
          Q: "스페셜 DJ 혜택이 뭔가요?",
          A: "1. 팬이 되고자 하는 회원의 프로필 선택",
        },
        {
          id:3,
          Q: "구매한 달로 무엇을 할 수 있어요?",
          A: "1. 방송 시작 후 메인페이지 노출 ",
        },
        {
          id:4,
          Q: "1:1 문의는 어떻게 하나요? 답변은 언제와요?",
          A: "달빛라이브 내 아이템은 '달'🌙을 구매하여",
        },
        {
          id:5,
          Q: "채팅이 안보여요 or 채팅이 늦게 올라와요",
          A: "방송방 내 채팅 기능이 정상적으로 동작하지 않는 경우, 아래의 내용을 참고해 주세요. ",
        },
        {
          id:6,
          Q: "스타란 무엇인가요?",
          A: "내 귀에 쏙~!! 방송 스타일이 맞는 방송 DJ",
        },
        {
          id:7,
          Q: "로그아웃 방법을 모르겠어요",
          A: "📱모바일 앱 APP 로그인 > 마이 페이지 > 맨 하단의 '로그아웃' 버튼 클릭",
        },
      ],
    },
    {
      type: "방송",
      content: [
        {
          id:8,
          Q: "방송을 종료하고 싶어요. 어떻게 하나요?",
          A: "달빛라이브 실행 시 새로운 앱 버전이 있을 경우",
        },
        {
          id:9,
          Q: "PC(WEB)에서도 방송이 가능한가요?",
          A: "1. 팬이 되고자 하는 회원의 프로필 선택",
        },
        {
          id:10,
          Q: "방송을 친구에게 공유하고 싶어요",
          A: "1. 방송 시작 후 메인페이지 노출 ",
        },
        {
          id:11,
          Q: "마이크 사용 권한이 없으면 방송이 불가한가요?",
          A: "달빛라이브 내 아이템은 '달'🌙을 구매하여",
        },
        {
          id:12,
          Q: "사연이란 무엇인가요?",
          A: "방송방 내 채팅 기능이 정상적으로 동작하지 않는 경우, 아래의 내용을 참고해 주세요. ",
        },
        {
          id:13,
          Q: "방송은 어떻게 하나요?",
          A: "내 귀에 쏙~!! 방송 스타일이 맞는 방송 DJ",
        },
        {
          id:14,
          Q: "빠른 말 이란 무엇인가요?",
          A: "📱모바일 앱 APP 로그인 > 마이 페이지 > 맨 하단의 '로그아웃' 버튼 클릭",
        },
      ],
    },
    {
      type: "결제",
      content: [
        {
          id:15,
          Q: "iPhone에서 결제를 하였는데 달이 충전되지 않아요",
          A: "달빛라이브 실행 시 새로운 앱 버전이 있을 경우",
        },
        {
          id:16,
          Q: "iOS(아이폰) 인앱 결제를 취소하고 싶어요",
          A: "1. 팬이 되고자 하는 회원의 프로필 선택",
        },
        {
          id:17,
          Q: "구매한 달을 환불받고 싶어요.",
          A: "1. 방송 시작 후 메인페이지 노출 ",
        },
        {
          id:18,
          Q: "중복 결제가 된 것 같아요.",
          A: "달빛라이브 내 아이템은 '달'🌙을 구매하여",
        },
      ],
    },
    {
      type: "계정",
      content: [
        {
          id:19,
          Q: "환전 하는 방법을 알고싶어요.",
          A: "달빛라이브 실행 시 새로운 앱 버전이 있을 경우",
        },
        {
          id:20,
          Q: "모니터링 기준은 어떻게 되나요?",
          A: "1. 팬이 되고자 하는 회원의 프로필 선택",
        },
        {
          id:21,
          Q: "환전할 때 꼭 알아야 할 정보가 있나요?",
          A: "1. 방송 시작 후 메인페이지 노출 ",
        },
        {
          id:22,
          Q: "환전할 때 어떤 서류를 첨부해야 하나요?",
          A: "달빛라이브 내 아이템은 '달'🌙을 구매하여",
        },
        {
          id:23,
          Q: "환전 신청 후 언제 입금되나요?",
          A: "방송방 내 채팅 기능이 정상적으로 동작하지 않는 경우, 아래의 내용을 참고해 주세요. ",
        },
        {
          id:24,
          Q: "타인 명의로 환전 진행이 가능한가요?",
          A: "내 귀에 쏙~!! 방송 스타일이 맞는 방송 DJ",
        },
        {
          id:25,
          Q: "환전이 뭔가요?",
          A: "📱모바일 앱 APP 로그인 > 마이 페이지 > 맨 하단의 '로그아웃' 버튼 클릭",
        },
      ],
    },
    {
      type: "기타",
      content: [
        {
          id:26,
          Q: "해외에서 이용하는 사람은 본인인증을 어떻게 해요?",
          A: "달빛라이브 실행 시 새로운 앱 버전이 있을 경우",
        },
        {
          id:27,
          Q: "개명을 했는데 이름 변경이 가능한가요?",
          A: "1. 팬이 되고자 하는 회원의 프로필 선택",
        },
        {
          id:28,
          Q: "타인의 명의를 도용해서 본인 확인을 하면 어떻게 되나요?",
          A: "1. 방송 시작 후 메인페이지 노출 ",
        },
        {
          id:29,
          Q: "내 개인정보를 사용한 사람을 처벌하고 싶어요.",
          A: "달빛라이브 내 아이템은 '달'🌙을 구매하여",
        },
        {
          id:30,
          Q: "가입한 계정을 찾고 싶어요",
          A: "방송방 내 채팅 기능이 정상적으로 동작하지 않는 경우, 아래의 내용을 참고해 주세요. ",
        },
        {
          id:31,
          Q: "탈퇴한 계정을 복구해주세요",
          A: "내 귀에 쏙~!! 방송 스타일이 맞는 방송 DJ",
        },
        {
          id:32,
          Q: "생년월일 혹은 성별 정보도 수정이 가능한가요?",
          A: "📱모바일 앱 APP 로그인 > 마이 페이지 > 맨 하단의 '로그아웃' 버튼 클릭",
        },
      ],
    },
  ];
  // const info = [...faqData];
  let normal = [];
  let live = [];
  let pay = [];
  let account = [];
  let etc = [];
  const [faq, setfaq] = useState(faqData);
  const [search, setSearch] = useState("");
  const [searchValid, setSearchValid] = useState(0);
  const [infoSearchLength, setinfoSearchLength] = useState(0);
  const [activeIndex, setActiveIndex] = useState('');

  const searchFormHandler = (event) => {
    event.preventDefault();

    faqData.map((faqData) => {
      faqData.content.map((data) => {
        if (data.Q.includes(search)) {
          // console.log(faqData.type);
          // console.log(data);

          if (faqData.type === "일반") {
            normal = [...normal, data];
          } else if (faqData.type === "방송") {
            live = [...live, data];
          } else if (faqData.type === "결제") {
            pay = [...pay, data];
          } else if (faqData.type === "계정") {
            account = [...account, data];
          } else if (faqData.type === "기타") {
            etc = [...etc, data];
          }
        }
        return 0;
      });
      return 0;
    });

    if (search !== "") {
      // 검색할 때
      setSearchValid(1);
      let infoSearch = [];
      if (normal.length > 0) {
        infoSearch = [...infoSearch, { type: "일반", content: normal }];
      }
      if (live.length > 0) {
        infoSearch = [...infoSearch, { type: "방송", content: live }];
      }
      if (pay.length > 0) {
        infoSearch = [...infoSearch, { type: "결제", content: pay }];
      }
      if (account.length > 0) {
        infoSearch = [...infoSearch, { type: "계정", content: account }];
      }
      if (account.length > 0) {
        infoSearch = [...infoSearch, { type: "기타", content: etc }];
      }
      // console.log(infoSearch);
      setinfoSearchLength(infoSearch.length);
      setfaq(infoSearch);
    } else {
      setSearchValid(0);
      setfaq(faqData);
    }
  };

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <GNB />
      <div className="totalWrap">
        <Header title={"FAQ"} />
        {/* 검색 */}
        <div className="searchWrap">
          <div className="searchForm">
            <form onSubmit={searchFormHandler}>
              <input
                type="text"
                placeholder="궁금한 내용을 검색해보세요."
                onChange={searchChange}
              />
              <button type="submit" className="searchBtn" />
            </form>
          </div>
        </div>

        {/* FAQ 내용 */}
        <div className="subContent">
          {searchValid === 1 && (
            <p className="searchResult">{`'${search}'${
              infoSearchLength > 0
                ? "로 검색한 결과예요"
                : "의 검색 결과가 없어요"
            }`}</p>
          )}
          {faq.map((data, index) => (
            <Faq
              key={index}
              title={data.type}
              content={data.content}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EX02;
