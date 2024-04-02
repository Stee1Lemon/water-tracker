import { WelcomeSection, WelcomeContainer } from './WelcomePage.styled';
import { Welcome } from 'components/Welcome/Welcome';

const WelcomePage = () => {
  return (
    <WelcomeSection>
      <WelcomeContainer>
        <Welcome />
      </WelcomeContainer>
    </WelcomeSection>
  );
};

export default WelcomePage;
