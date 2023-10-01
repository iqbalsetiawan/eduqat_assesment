import React from "react";
import styled from "styled-components";

import Github from "../../assets/Github.png";

import HeaderLeftArrow from "../atoms/HeaderLeftArrow";
import HeaderDelimiter from "../atoms/HeaderDelimiter";
import HeaderEventText from "../atoms/HeaderEventText";

const HeaderWrapper = styled.div`
  display: flex;
  height: 92px;
  padding: 0px 40px;
  box-shadow: 0px 4px 34px 0px rgba(39, 26, 73, 0.05);
  justify-content: space-between;
`;

const LeftGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <LeftGroup>
        <HeaderLeftArrow />
        <HeaderDelimiter />
        <HeaderEventText />
      </LeftGroup>
      <RightGroup>
        <a
          href="https://github.com/iqbalsetiawan/eduqat_assesment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img style={{ width: 35 }} src={Github} alt="Github Logo" />
        </a>
      </RightGroup>
    </HeaderWrapper>
  );
}

export default Header;
