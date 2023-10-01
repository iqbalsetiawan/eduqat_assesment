import styled, { css } from "styled-components";

const BaseStyle = css`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
`;

const StyledTextH1 = styled.span`
  ${BaseStyle}
  color: var(--text-100, #252a3c);
  font-size: 32px;
  line-height: 32px;
`;

const StyledTextSoft = styled.span`
  ${BaseStyle}
  color: var(--text-tertiary, #8189a2);
  font-size: 12px;
  line-height: 140%;
`;

const StyledTextRegular = styled.span`
  ${BaseStyle}
  color: var(--text-100, #252A3C);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32px;
`;

export { StyledTextH1, StyledTextSoft, StyledTextRegular };
