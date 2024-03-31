import { ModalOverlay } from './Modal.styled';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      {children}
    </ModalOverlay>
  );
};

export default Modal;