import { WelcomeSection, WelcomeContainer } from './WelcomePage.styled';
import { Welcome } from 'components/Welcome/Welcome';
import { Container } from 'components/Container/Container';

const WelcomePage = () => {
  return (
    <WelcomeSection>
      <Container>
        <WelcomeContainer>
          <Welcome />
        </WelcomeContainer>
      </Container>
    </WelcomeSection>
  );
};

export default WelcomePage;
