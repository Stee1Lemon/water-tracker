import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import CardMember from './CardMember';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import icons from '../../assets/icons.svg';

import VG from 'assets/photoTeam/VLADYSLAV-GOLODNIUK.jpg';
import MA from 'assets/photoTeam/MARYNA-AKSAKOVA.jpg';
import AT from 'assets/photoTeam/ALINA-TANTSURA.jpg';
import MV from 'assets/photoTeam/MAKSYM-VYSOTSKYI.jpeg.jpeg';
import KB from 'assets/photoTeam/Kamila Bohdanova.png';
import IT from 'assets/photoTeam/IRYNA-TOLOLO.jpg';
import OK from 'assets/photoTeam/OLEH-KRIUCHKOV.jpg';
import OB from 'assets/photoTeam/OLHA-BUZAK.jpg';
import VS from 'assets/photoTeam/VADYM-STARYNETS-min.png';
import YS from 'assets/photoTeam/YELYZAVETA SHATROVA.jpg';

import { TeamButton, ButtonOverlay, CardArray } from './ModalTeam.styled';

const ModalTeam = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamArray = [
    {
      id: 1,
      name: 'Vladyslav Golodnuik',
      role: 'Team Lead Frontend',
      photo: VG,
      linkedin: 'https://www.linkedin.com/in/vladyslav-golodniuk-780902302/',
      github: 'https://github.com/Stee1Lemon',
    },

    {
      id: 2,
      name: 'Maryna Aksakova',
      role: 'Team Lead Backend',
      photo: MA,
      linkedin: 'https://www.linkedin.com/in/maryna-aksakova-3a0b9623b/',
      github: 'https://github.com/Marixa82',
    },
    {
      id: 3,
      name: 'Oleh Kriuchkov',
      role: 'Scrum Master',
      photo: OK,
      linkedin: 'https://www.linkedin.com/in/oleg-kryuchkov/',
      github: 'https://github.com/OlegKryuchkov',
    },
    {
      id: 4,
      name: 'Maksym Vysotskyi',
      role: 'Backend developer',
      photo: MV,
      linkedin: 'https://www.linkedin.com/in/maxim-vysotsky-74a570274/',
      github: 'https://github.com/Needlife1',
    },
    {
      id: 5,
      name: 'Alina Tantsura',
      role: 'Backend developer',
      photo: AT,
      linkedin: 'https://www.linkedin.com/in/alina-tantsura/',
      github: 'https://github.com/AlinaTantsura',
    },

    {
      id: 6,
      name: 'Vadym Starynets',
      role: 'Frontend developer',
      photo: VS,
      linkedin: 'https://www.linkedin.com/in/vadymstarynets/',
      github: 'https://github.com/Debeluk',
    },
    {
      id: 7,
      name: 'Yelyzaveta Shatrova',
      role: 'Frontend developer',
      photo: YS,
      linkedin: 'https://www.linkedin.com/in/yelyzaveta-shatrova/',
      github: 'https://github.com/shtrvv',
    },
    {
      id: 8,
      name: 'Iryna Tololo',
      role: 'Frontend developer',
      photo: IT,
      linkedin: 'https://www.linkedin.com/in/iryna-tololo/',
      github: 'https://github.com/iratololo',
    },
    {
      id: 9,
      name: 'Kamila Bohdanova',
      role: 'Frontend developer',
      photo: KB,
      linkedin: 'https://www.linkedin.com/in/kamila-bohdanova/',
      github: 'https://github.com/Kamila0301',
    },
    {
      id: 10,
      name: 'Olha Buzak',
      role: 'Frontend developer',
      photo: OB,
      linkedin: 'https://www.linkedin.com/in/olha-buzak/',
      github: 'https://github.com/Olha-buz',
    },
  ];

  return (
    <>
      <TeamButton onClick={() => setIsModalOpen(!isModalOpen)}>
        {t('team')}
      </TeamButton>

      <ModalOverlay
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      >
        <CardArray>
          {teamArray.map((member, index) => (
            <CardMember key={index} data={member} />
          ))}
          <ButtonOverlay onClick={() => setIsModalOpen(!isModalOpen)}>
            <svg>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </ButtonOverlay>
        </CardArray>
      </ModalOverlay>
    </>
  );
};

export default ModalTeam;
