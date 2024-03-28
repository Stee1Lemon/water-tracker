import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';

const FirstPage = () => {
  const test = import.meta.env.VITE_API_TEST;

  return (
    <Container>
      <Title>First Page Test env</Title>
      <p>${test}</p>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
