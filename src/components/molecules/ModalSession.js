import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    bottom: 400,
    transform: "translate(-50%, 0)",
    position: "absolute",
    width: 500,
    outline: "none",
    borderRadius: 8,
  },
};

const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) => (props.invalid ? "red" : "black")};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const StyledButtonSubmit = styled.button`
  background-color: rgba(120, 0, 239, 1);
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
`;

const StyledButtonCancel = styled.button`
  background-color: #cc0000;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalSession = ({ isOpen, closeModal, addSession }) => {
  const [session, setSession] = useState("");
  const [sessionInvalid, setSessionInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (session === "") {
      setSessionInvalid(true);
    } else {
      setSessionInvalid(false);
      addSession(session);
    }
  };

  const usernameEntered = (e) => {
    setSession(e.target.value);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Add Session Modal"
    >
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Username:</StyledLabel>
        <StyledInput
          type="text"
          value={session}
          onChange={(e) => usernameEntered(e)}
        />
        {sessionInvalid && <StyledLabel invalid>Session is empty.</StyledLabel>}
        <ButtonContainer>
          <StyledButtonCancel type="submit" onClick={closeModal}>
            Cancel
          </StyledButtonCancel>
          <StyledButtonSubmit type="submit">Submit</StyledButtonSubmit>
        </ButtonContainer>
      </StyledForm>
    </ReactModal>
  );
};

export default ModalSession;
