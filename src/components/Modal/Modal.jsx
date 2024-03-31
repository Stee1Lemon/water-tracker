import { ModalOverlay } from './Modal.styled';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      {children}
    </ModalOverlay>
  );
};

export default Modal;