import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';
import { log } from 'console';

const FirstPage = () => {
  log('first page');
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
