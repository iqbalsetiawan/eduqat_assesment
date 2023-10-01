import styled from "styled-components";

const Delimiter = styled.div`
  width: 0px;
  height: 40px;
`;

function HeaderDelimiter() {
  return (
    <Delimiter>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="40"
        viewBox="0 0 2 40"
        fill="none"
      >
        <path d="M1 0V40" stroke="#BCC0D0" />
      </svg>
    </Delimiter>
  );
}

export default HeaderDelimiter;
