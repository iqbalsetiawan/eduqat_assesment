import React from "react";
import styled, { css } from "styled-components";

const baseMainStyles = css`
  display: inline-flex;
  gap: 10px;
  border-radius: 8px;
`;

const PrimaryButton = styled.button`
  ${baseMainStyles}
  padding: ${({ iconOnly }) => (iconOnly ? "7.174px 7.891px" : "12px 23px")};
  background: var(--primary-100, #7800ef);
  border: none;
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  ${baseMainStyles}
  padding: 10px 16px;
  border: 1px solid #6f32d2;
`;

const baseTextButton = css`
  text-align: right;
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
`;

const TextButtonPrimary = styled.span`
  ${baseTextButton}
  color: var(--basic-white, #fff);
  font-weight: 500;
  line-height: 140%;
`;

const TextButtonSecondary = styled.span`
  ${baseTextButton}
  color: #6f32d2;
  font-weight: 400;
  line-height: 24px;
`;

const InsideButton = styled.div`
  display: flex;
  gap: ${(props) => (props.iconOnly ? "0px" : "12px")};
`;

const IconButton = styled.img`
  width: 24px;
  height: 24px;
`;

const Button = ({ icon, text, onClick, iconOnly = false, primary = false }) => {
  if (primary) {
    return (
      <PrimaryButton onClick={onClick} iconOnly={iconOnly}>
        <InsideButton iconOnly={iconOnly}>
          <IconButton src={icon} />
          <TextButtonPrimary>{text}</TextButtonPrimary>
        </InsideButton>
      </PrimaryButton>
    );
  } else {
    return (
      <SecondaryButton onClick={onClick}>
        <InsideButton>
          <IconButton src={icon} />
          <TextButtonSecondary>{text}</TextButtonSecondary>
        </InsideButton>
      </SecondaryButton>
    );
  }
};

export default Button;
