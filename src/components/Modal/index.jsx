import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

export default function ModalComponent(isModalOpen){
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(isModalOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <IoMdCloseCircle size={24} onClick={closeModal} cursor={"pointer"}/>
      </StyledModal>
    </>
  );
};

const StyledModal = styled(Modal)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 400px;
  height: 400px;
  margin: 0 auto;
  margin-top: 100px;
  z-index: 2;
`;
