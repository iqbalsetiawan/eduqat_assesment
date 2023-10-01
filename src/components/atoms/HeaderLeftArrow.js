import styled from "styled-components";

const LeftArrow = styled.div`
  width: 24px;
  height: 24px;
`;

function HeaderLeftArrow() {
  return (
    <LeftArrow>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.5 16.5L4 12M4 12L8.5 7.5M4 12L20 12"
          stroke="#262F56"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </LeftArrow>
  );
}

export default HeaderLeftArrow;
