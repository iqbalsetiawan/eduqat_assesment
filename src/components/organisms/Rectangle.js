import React from "react";
import styled from "styled-components";

import { StyledTextH1, StyledTextSoft } from "../atoms/Text";
import Button from "../atoms/Button";
import Eye from "../../assets/Eye.svg";
import Tab from "../atoms/Tab";

const RectangleGroupWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftTextWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightButtonWrapper = styled.div`
  flex: 0 0 auto;
`;

const TabWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const StyledSoft = {
  marginLeft: 30,
};

function RectangleGroup() {
  const tabs = [
    {
      label: "Curicullum",
      content: <div>This is the content of Tab 1.</div>,
    },
  ];

  return (
    <RectangleGroupWrapper>
      <LeftTextWrapper>
        <StyledTextH1>Belajar dan praktek cinematic videography</StyledTextH1>
        <StyledTextSoft style={StyledSoft}>
          Last edited 18 October 2021 | 13:23
        </StyledTextSoft>
      </LeftTextWrapper>
      <RightButtonWrapper>
        <Button icon={Eye} text={"Preview"} />
      </RightButtonWrapper>
      <TabWrapper>
        <Tab tabs={tabs} />
      </TabWrapper>
    </RectangleGroupWrapper>
  );
}

export default RectangleGroup;
