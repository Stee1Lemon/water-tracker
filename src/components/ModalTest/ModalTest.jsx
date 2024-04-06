import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { useState } from 'react';
import { ModalTestStyles } from './ModalTest.styled';
import Loader from 'components/Loader/Loader';
import { AuthTest } from 'components/AuthTest/AuthTest';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';

const ModalTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataExample, setDataExample] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleNewNumber = () => {
    setIsLoading(true);
    setDataExample('');

    setTimeout(() => {
      setDataExample(Math.floor(Math.random() * 10));
      setIsLoading(false);
    }, 2000);
  };

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

          {isLoading ? <Loader /> : <p>{dataExample}</p>}

          <button onClick={handleNewNumber}>Generate number</button>
          <LanguageSwitcher />
          <AuthTest />
        </ModalTestStyles>
      </ModalOverlay>
    </>
  );
};

export default ModalTest;
