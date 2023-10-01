import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    textAlign: "center",
  },
};

const ModalDelete = ({ isOpen, closeModal, onDelete, type }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={`Delete ${type} Modal`}
    >
      <h2>Confirm Deletion</h2>
      <p>{`Are you sure you want to delete ${type}?`}</p>
      <div style={{ gap: 10, display: "flex", justifyContent: "center" }}>
        <button onClick={onDelete}>Delete</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
