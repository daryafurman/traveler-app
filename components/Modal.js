import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: calc(50% - 150px);
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 14px;
  z-index: 101;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f4743b;
  color: white;
  border: none;
`;

const Modal = ({ show, onClose, onSubmit }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalWrapper>
        <Form onSubmit={onSubmit}>
          <Input type="text" placeholder="Name" name="name" required />
          <Input type="email" placeholder="Email" name="email" required />
          <Input
            type="text"
            placeholder="You want to book tour to"
            name="tour"
            required
          />

          <Input
            type="text"
            placeholder="Question (Optional)"
            name="question"
          />
          <Button type="submit">Send Request</Button>
        </Form>
      </ModalWrapper>
    </>
  );
};

export default Modal;
