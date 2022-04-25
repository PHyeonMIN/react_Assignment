import React, { useState } from "react";

import "./Faq.scss";

import FaqList from "./FaqList";

const Faq = ({ title, content, activeIndex, setActiveIndex }) => {
  // const [activeIndex, setActiveIndex] = useState('');
  return (
    <div className="faqSection">
      <div className="faqTitle">{title}</div>

      {content.map((data) => (
        <FaqList
          key={data.id}
          data={data}
          idx={data.id}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default Faq;
