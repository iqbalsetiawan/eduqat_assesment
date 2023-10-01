import styled from "styled-components";

import { StyledTextRegular } from "../atoms/Text";

const EventGroupWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--basic-80, #dfe5ee);
  background: var(--basic-white, #fff);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset;
`;

function Event() {
  return (
    <EventGroupWrapper>
      <Container>
        <StyledTextRegular>
          Event Schedule: 24 Oktober 2021, 16:30
        </StyledTextRegular>
      </Container>
    </EventGroupWrapper>
  );
}

export default Event;
