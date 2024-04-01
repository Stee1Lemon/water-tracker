import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { useState } from 'react';
import { ModalTestStyles } from './ModalTest.styled';

const ModalTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>
      <ModalOverlay
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalTestStyles>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>Close</button>
          <h2>Modal Test</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            fugiat.
          </p>
        </ModalTestStyles>
      </ModalOverlay>
    </>
  );
};

export default ModalTest;
