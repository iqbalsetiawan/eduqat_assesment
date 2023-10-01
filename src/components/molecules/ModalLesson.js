import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { formatDateTime } from "../../utils/date";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "10%",
    left: "50%",
    bottom: 100,
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
  gap: 10px;
  display: grid;
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

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StyledCheckboxLabel = styled.label`
  margin-left: 5px;
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

const ModalLesson = ({ isOpen, closeModal, addLesson }) => {
  const [lessonData, setLessonData] = useState({
    type: "Video",
    title: "",
    required: false,
    previewable: false,
    date: "",
    duration: "",
    downloadable: true,
  });

  const [titleInvalid, setTitleInvalid] = useState(false);
  const [dateInvalid, setDateInvalid] = useState(false);
  const [durationInvalid, setDurationInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lessonData.title === "") {
      setTitleInvalid(true);
      return;
    } else {
      setTitleInvalid(false);
    }

    if (lessonData.date === "") {
      setDateInvalid(true);
      return;
    } else {
      setDateInvalid(false);
    }

    if (lessonData.duration === "") {
      setDurationInvalid(true);
      return;
    } else {
      setDurationInvalid(false);
    }

    const formattedLessonData = {
      ...lessonData,
      id: window.crypto.randomUUID(),
      date: formatDateTime(lessonData.date),
      duration: `${lessonData.duration} Min`,
    };

    console.log(formattedLessonData);

    addLesson(formattedLessonData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setLessonData((prevLessonData) => ({
      ...prevLessonData,
      [name]: newValue,
    }));
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Add Lesson Modal"
    >
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Choose Logo (Video or Location):</StyledLabel>
        <StyledSelect
          name="type"
          value={lessonData.type}
          onChange={handleInputChange}
        >
          <option value="Video">Video</option>
          <option value="Location">Location</option>
        </StyledSelect>

        <StyledLabel>
          <span style={{ color: "red" }}>* </span>Title of the Lesson:
        </StyledLabel>
        <StyledInput
          type="text"
          name="title"
          required
          value={lessonData.title}
          onChange={handleInputChange}
        />
        {titleInvalid && <StyledLabel invalid>Title is required.</StyledLabel>}

        <StyledCheckboxContainer>
          <input
            type="checkbox"
            name="required"
            checked={lessonData.required}
            onChange={handleInputChange}
          />
          <StyledCheckboxLabel>Required</StyledCheckboxLabel>
        </StyledCheckboxContainer>

        <StyledCheckboxContainer>
          <input
            type="checkbox"
            name="previewable"
            checked={lessonData.previewable}
            onChange={handleInputChange}
          />
          <StyledCheckboxLabel>Previewable</StyledCheckboxLabel>
        </StyledCheckboxContainer>

        <StyledLabel>
          <span style={{ color: "red" }}>* </span>Date:
        </StyledLabel>
        <StyledInput
          type="datetime-local"
          name="date"
          required
          value={lessonData.date}
          onChange={handleInputChange}
        />
        {dateInvalid && <StyledLabel invalid>Date is required.</StyledLabel>}

        <StyledLabel>
          <span style={{ color: "red" }}>* </span>Duration:
        </StyledLabel>
        <StyledInput
          type="time"
          name="duration"
          required
          value={lessonData.duration}
          onChange={handleInputChange}
        />
        {durationInvalid && (
          <StyledLabel invalid>Duration is required.</StyledLabel>
        )}

        <ButtonContainer>
          <StyledButtonCancel type="button" onClick={closeModal}>
            Cancel
          </StyledButtonCancel>
          <StyledButtonSubmit type="submit">Submit</StyledButtonSubmit>
        </ButtonContainer>
      </StyledForm>
    </ReactModal>
  );
};

export default ModalLesson;
