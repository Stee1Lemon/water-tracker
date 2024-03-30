import { ModalOverlay, ModalContainer } from './Modal.styled';

const Modal = ({ children, isOpen, onClose, size }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer size={size} onClick={e => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;