import { WelcomeSection, WelcomeContainer } from './WelcomePage.styled';
import { Welcome } from 'components/Welcome/Welcome';
import ModalTeam from 'components/ModalTeam/ModalTeam';

const WelcomePage = () => {
  return (
    <WelcomeSection>
      <WelcomeContainer>
        <Welcome />
        <ModalTeam />
      </WelcomeContainer>
    </WelcomeSection>
  );
};

export default WelcomePage;
