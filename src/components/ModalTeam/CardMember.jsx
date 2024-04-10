import icons from '../../assets/icons.svg';
import {
  ModalTeamOverlay,
  Image,
  IconTeam,
  IconTeamGithub,
  IconList,
  TitleTeam,
  SubtitleTeam,
  BoxPhoto,
} from './ModalTeam.styled';

function CardMember({ data }) {
  return (
    <ModalTeamOverlay>
      <BoxPhoto>
        <Image src={data.photo} />
      </BoxPhoto>
      <TitleTeam>{data.name}</TitleTeam>
      <SubtitleTeam>{data.role}</SubtitleTeam>
      <IconList>
        <IconTeam href={data.linkedin}>
          <svg>
            <use href={`${icons}#icon-linkedin`}></use>
          </svg>
        </IconTeam>

        <IconTeamGithub href={data.github}>
          <svg>
            <use href={`${icons}#icon-github`}></use>
          </svg>
        </IconTeamGithub>
      </IconList>
    </ModalTeamOverlay>
  );
}

export default CardMember;
