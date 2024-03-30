import { ModalOverlay, ModalContainer } from './Modal.styled';

const Modal = ({ children, isOpen, onClose, size, style }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer size={size} onClick={e => e.stopPropagation()} style={style}>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;