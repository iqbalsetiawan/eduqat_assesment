import React, { useState } from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(223, 229, 238, 1);
`;

const TabItem = styled.div`
  padding: 16px 24px;
  cursor: pointer;
  border-bottom: 2px solid rgba(111, 50, 210, 1);
  color: rgba(111, 50, 210, 1);
`;

function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <TabsWrapper>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          onClick={() => handleTabClick(index)}
          active={activeTab === index}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabsWrapper>
  );
}

export default Tab;
