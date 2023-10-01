import { useEffect, useState } from "react";
import styled from "styled-components";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Dot from "../../assets/Dot.svg";
import Edit from "../../assets/Edit.svg";
import Time from "../../assets/Time.svg";
import Plus from "../../assets/Plus.svg";
import Video from "../../assets/Video.svg";
import Trash from "../../assets/Trash.svg";
import Handle from "../../assets/Handle.svg";
import Location from "../../assets/Location.svg";
import Download from "../../assets/Download.svg";
import GroupVertical from "../../assets/GroupVertical.svg";
import GroupHorizontal from "../../assets/GroupHorizontal.svg";

import Button from "../atoms/Button";
import ModalSession from "../molecules/ModalSession";
import ModalLesson from "../molecules/ModalLesson";
import ModalDelete from "../molecules/ModalDelete";
import HeaderDelimiter from "../atoms/HeaderDelimiter";
import { StyledTextH1, StyledTextRegular } from "../atoms/Text";

const data = [
  {
    id: window.crypto.randomUUID(),
    title: "Session 1",
    children: [
      {
        id: window.crypto.randomUUID(),
        type: "Video",
        subTitle: "Judul video",
        date: "24 Oktober 2021, 16:30",
        duration: "06:30 Min",
        required: true,
        previewable: true,
      },
      {
        id: window.crypto.randomUUID(),
        type: "Video",
        subTitle: "Judul video",
        date: "25 Oktober 2021, 16:30",
        duration: "06:30 Min",
        required: true,
        previewable: false,
      },
      {
        id: window.crypto.randomUUID(),
        type: "Location",
        subTitle: "Judul Onsite",
        date: "26 Oktober 2021, 16:30",
        duration: "06:30 Min",
        required: true,
        previewable: false,
      },
    ],
  },
  {
    id: window.crypto.randomUUID(),
    title: "Session 2",
    children: [
      {
        id: window.crypto.randomUUID(),
        type: "Location",
        subTitle: "Judul video",
        date: "24 Oktober 2021, 16:30",
        duration: "06:30 Min",
        required: false,
        previewable: true,
      },
      {
        id: window.crypto.randomUUID(),
        type: "Video",
        subTitle: "Judul video",
        date: "25 Oktober 2021, 16:30",
        duration: "06:30 Min",
        required: true,
        previewable: false,
      },
      {
        id: window.crypto.randomUUID(),
        type: "Location",
        subTitle: "Judul video",
        date: "26 Oktober 2021, 16:30",
        duration: "06:30 Min",
        required: false,
        previewable: false,
      },
    ],
  },
];

const SessionGroupWrapper = styled.div`
  padding: 20px 40px;
`;

const Container = styled.div`
  gap: 20px;
  display: grid;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--basic-80, #dfe5ee);
  background: var(--basic-white, #fff);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset;
`;

const AddSessionButton = styled.div`
  margin-top: 10px;
  justify-content: flex-end;
  display: flex;
`;

const HandleGrab = styled.img`
  cursor: grab;
  user-select: none;
`;

const SessionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftSessionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImageWrapper = styled.img`
  width: 30px;
  border-radius: 8px;
  background: var(--basic-background, #f6f8fc);
`;

const LessonContainer = styled.div`
  padding: 10px;
`;

const ChildWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const ChildContainerLeft = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  overflow: auto;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100px;
`;

const ChildContainerRight = styled.div`
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const EditableTitle = styled.input`
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: bold;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

const StyledH1 = {
  fontSize: 24,
};

const StyledRegular = {
  color: "rgba(120, 0, 239, 1)",
};

const StyledSoft = {
  color: "rgba(129, 137, 162, 1)",
};

const SortableSession = ({
  index,
  setSessions,
  sessions,
  session,
  openLessonModal,
  openDeleteSessionModal,
  openDeleteLessonModal,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: session.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(session.title);

  const startEditing = () => {
    setIsEditing(true);
  };

  const finishEditing = () => {
    setIsEditing(false);

    const updatedSessions = sessions.map((s) => {
      if (s.id === session.id) {
        return {
          ...s,
          title: title,
        };
      }
      return s;
    });

    setSessions(updatedSessions);

    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div key={session.id} ref={setNodeRef} style={style}>
      <SessionHead>
        <LeftSessionHead>
          <HandleGrab
            src={Handle}
            alt="Handle Icon"
            {...attributes}
            {...listeners}
          />
          {isEditing ? (
            <EditableTitle
              type="text"
              value={title}
              onChange={handleInputChange}
              onBlur={finishEditing}
              autoFocus
            />
          ) : (
            <StyledTextH1 style={StyledH1}>{title}</StyledTextH1>
          )}
          <EditIcon
            alt="Edit Icon"
            src={Edit}
            onClick={isEditing ? finishEditing : startEditing}
          />
        </LeftSessionHead>
        <div style={{ gap: 10, display: "flex" }}>
          <ImageWrapper alt="GroupHorizontal" src={GroupHorizontal} />
          <ImageWrapper
            style={{ cursor: "pointer" }}
            alt="Delete Session Logo"
            src={Trash}
            onClick={openDeleteSessionModal}
          />
        </div>
      </SessionHead>
      <LessonContainer>
        {session.children.map((child, idx) => (
          <ChildWrapper key={child.id}>
            <ChildContainerLeft>
              <ImageWrapper
                alt="Logo"
                src={child.type === "Video" ? Video : Location}
              />
              <StyledTextRegular>{child.subTitle}</StyledTextRegular>
              <HeaderDelimiter />
              <StyledTextRegular style={StyledRegular}>
                {child.required ? "Required" : ""}
              </StyledTextRegular>
              {child.previewable ? (
                <>
                  <img alt="Dot Icon" src={Dot} />
                  <StyledTextRegular style={StyledSoft}>
                    {"Previewable"}
                  </StyledTextRegular>
                </>
              ) : (
                ""
              )}
            </ChildContainerLeft>
            <ChildContainerRight>
              <img alt="Time Icon" src={Time} />
              <StyledTextRegular>{child.date}</StyledTextRegular>
              <img alt="Dot Icon" src={Dot} />
              <img alt="Time Icon" src={Time} />
              <StyledTextRegular>{child.duration}</StyledTextRegular>
              <img alt="Dot Icon" src={Dot} />
              <img alt="Download Icon" src={Download} />
              <StyledTextRegular>Downloadable</StyledTextRegular>
              <img alt="GroupVertical Icon" src={GroupVertical} />
              <img
                style={{ cursor: "pointer", width: 30 }}
                alt="Delete Lesson Icon"
                src={Trash}
                onClick={() => openDeleteLessonModal(index, idx)}
              />
            </ChildContainerRight>
          </ChildWrapper>
        ))}
      </LessonContainer>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Button primary iconOnly icon={Plus} onClick={openLessonModal} />
        <StyledTextRegular>Add Lesson Material</StyledTextRegular>
      </div>
    </div>
  );
};

function Session() {
  const [sessions, setSessions] = useState(() => {
    const savedData = localStorage.getItem("sessions");
    return savedData ? JSON.parse(savedData) : data;
  });
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isDeleteSessionModalOpen, setIsDeleteSessionModalOpen] =
    useState(false);
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(null);
  const [sessionToDelete, setSessionToDelete] = useState(null);

  const [isDeleteLessonModalOpen, setIsDeleteLessonModalOpen] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  const openSessionModal = () => {
    setIsSessionModalOpen(true);
  };

  const closeModal = () => {
    setIsSessionModalOpen(false);
    setIsLessonModalOpen(false);
    setIsDeleteSessionModalOpen(false);
    setSelectedSessionIndex(null);
    setSessionToDelete(null);
    setIsDeleteLessonModalOpen(false);
    setLessonToDelete(null);
  };

  const openLessonModal = (sessionIndex) => {
    setIsLessonModalOpen(true);
    setSelectedSessionIndex(sessionIndex);
  };

  const openDeleteSessionModal = (sessionIndex) => {
    setIsDeleteSessionModalOpen(true);
    setSessionToDelete(sessionIndex);
  };

  const openDeleteLessonModal = (sessionIndex, lessonIndex) => {
    setIsDeleteLessonModalOpen(true);
    setSelectedSessionIndex(sessionIndex);
    setLessonToDelete(lessonIndex);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (!active || !over || active.id === over.id) {
      return;
    }

    setSessions((sessions) => {
      const oldIndex = sessions.findIndex((s) => s.id === active.id);
      const newIndex = sessions.findIndex((s) => s.id === over.id);
      return arrayMove(sessions, oldIndex, newIndex);
    });
  };

  const addSession = (sessionName) => {
    const newSession = {
      id: window.crypto.randomUUID(),
      title: sessionName,
      children: [],
    };

    setSessions((prevSessions) => [...prevSessions, newSession]);
    closeModal();
  };

  const addLesson = (lessonData) => {
    if (selectedSessionIndex !== null) {
      const newLesson = {
        id: Math.random(),
        type: lessonData.type,
        subTitle: lessonData.title,
        date: lessonData.date,
        duration: lessonData.duration,
        required: lessonData.required,
        previewable: lessonData.previewable,
      };

      setSessions((prevSessions) => {
        const updatedSessions = [...prevSessions];
        updatedSessions[selectedSessionIndex].children.push(newLesson);
        return updatedSessions;
      });

      const updatedSessionsData = JSON.stringify(sessions);
      localStorage.setItem("sessions", updatedSessionsData);

      closeModal();
      setSelectedSessionIndex(null);
    }
  };

  const handleDeleteSession = () => {
    const updatedSessions = [...sessions];
    updatedSessions.splice(sessionToDelete, 1);

    setSessions(updatedSessions);

    localStorage.setItem("sessions", JSON.stringify(updatedSessions));

    closeModal();
  };

  const handleDeleteLesson = () => {
    if (selectedSessionIndex !== null && lessonToDelete !== null) {
      const updatedSessions = [...sessions];
      updatedSessions[selectedSessionIndex].children.splice(lessonToDelete, 1);

      setSessions(updatedSessions);

      localStorage.setItem("sessions", JSON.stringify(updatedSessions));

      closeModal();
      setLessonToDelete(null);
    }
  };

  return (
    <SessionGroupWrapper>
      <Container>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={sessions}
            strategy={verticalListSortingStrategy}
          >
            {sessions.map((session, index) => (
              <SortableSession
                key={session.id}
                index={index}
                setSessions={setSessions}
                sessions={sessions}
                session={session}
                openLessonModal={() => openLessonModal(index)}
                openDeleteSessionModal={() => openDeleteSessionModal(index)}
                openDeleteLessonModal={openDeleteLessonModal}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Container>
      <AddSessionButton>
        <Button
          primary
          icon={Plus}
          text={"Add Session"}
          onClick={openSessionModal}
        />
      </AddSessionButton>
      {isSessionModalOpen && (
        <ModalSession
          isOpen={isSessionModalOpen}
          closeModal={closeModal}
          addSession={addSession}
        />
      )}
      {isLessonModalOpen && (
        <ModalLesson
          isOpen={isLessonModalOpen}
          closeModal={closeModal}
          addLesson={addLesson}
        />
      )}
      {isDeleteSessionModalOpen && (
        <ModalDelete
          isOpen={isDeleteSessionModalOpen}
          closeModal={closeModal}
          onDelete={handleDeleteSession}
          type="session"
        />
      )}
      {isDeleteLessonModalOpen && (
        <ModalDelete
          isOpen={isDeleteLessonModalOpen}
          closeModal={closeModal}
          onDelete={handleDeleteLesson}
          type="lesson"
        />
      )}
    </SessionGroupWrapper>
  );
}

export default Session;
