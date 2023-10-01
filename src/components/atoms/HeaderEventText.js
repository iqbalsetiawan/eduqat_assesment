import styled from "styled-components";

const EventText = styled.div`
  color: var(--text-100, #252a3c);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

function HeaderEventText() {
  return <EventText>Event</EventText>;
}

export default HeaderEventText;
