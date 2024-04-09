import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { useState } from 'react';
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

import {
  TeamButton,
  ModalTeamOverlay,
  ButtonOverlay,
  Image,
  ContainerTeam,
  ListTeam,
  IconTeam,
  IconTeamGithub,
  IconList,
  ContainerListTeam,
  TitleTeam,
  SubtitleTeam,
} from './ModalTeam.styled';

const ModalTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TeamButton onClick={() => setIsModalOpen(!isModalOpen)}>
        Team members
      </TeamButton>

      <ModalOverlay
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalTeamOverlay>
          <ContainerTeam>
            <ListTeam>
              <ContainerListTeam>
                <div>
                  <ButtonOverlay onClick={() => setIsModalOpen(!isModalOpen)}>
                    <svg>
                      <use href={`${icons}#icon-close`}></use>
                    </svg>
                  </ButtonOverlay>
                  <Image src={VG}></Image>
                  <TitleTeam>Vladyslav Golodnuik</TitleTeam>
                  <SubtitleTeam>Team Lead Frontend</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a>
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/Stee1Lemon">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={MA}></Image>

                <div>
                  <TitleTeam>Maryna Aksakova</TitleTeam>
                  <SubtitleTeam>Team Lead Backend</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href="https://www.linkedin.com/in/maryna-aksakova-3a0b9623b/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/Marixa82">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={OK}></Image>

                <div>
                  <TitleTeam>Oleh Kriuchkov</TitleTeam>
                  <SubtitleTeam>Scrum Master</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/oleg-kryuchkov/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href="https://github.com/OlegKryuchkov">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={AT}></Image>

                <div>
                  <TitleTeam>Alina Tantsura</TitleTeam>
                  <SubtitleTeam>Backend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/alina-tantsura/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/AlinaTantsura">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>
              <ContainerListTeam>
                <Image src={MV}></Image>

                <div>
                  <TitleTeam>Maksym Vysotskyi</TitleTeam>
                  <SubtitleTeam>Backend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/maxim-vysotsky-74a570274/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/Needlife1">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={VS}></Image>

                <div>
                  <TitleTeam>Vadym Starynets</TitleTeam>
                  <SubtitleTeam>Frontend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/vadymstarynets/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/Debeluk">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={OB}></Image>

                <div>
                  <TitleTeam>Olha Buzak</TitleTeam>
                  <SubtitleTeam>Frontend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/olha-buzak/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/Olha-buz">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={IT}></Image>

                <div>
                  <TitleTeam>Iryna Tololo</TitleTeam>
                  <SubtitleTeam>Frontend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/iryna-tololo/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/iratololo">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={YS}></Image>

                <div>
                  <TitleTeam>Yelyzaveta Shatrova</TitleTeam>
                  <SubtitleTeam>Frontend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/yelyzaveta-shatrova/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/shtrvv">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>

              <ContainerListTeam>
                <Image src={KB}></Image>

                <div>
                  <TitleTeam>Kamila Bohdanova</TitleTeam>
                  <SubtitleTeam>Frontend developer</SubtitleTeam>
                  <IconList>
                    <IconTeam>
                      <a href=" https://www.linkedin.com/in/kamila-bohdanova/">
                        <svg>
                          <use href={`${icons}#icon-linkedin`}></use>
                        </svg>
                      </a>
                    </IconTeam>

                    <IconTeamGithub>
                      <a href=" https://github.com/Kamila0301">
                        <svg>
                          <use href={`${icons}#icon-github`}></use>
                        </svg>
                      </a>
                    </IconTeamGithub>
                  </IconList>
                </div>
              </ContainerListTeam>
            </ListTeam>
          </ContainerTeam>
        </ModalTeamOverlay>
      </ModalOverlay>
    </>
  );
};

export default ModalTeam;
