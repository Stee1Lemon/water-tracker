import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
        <StyledLink to="/welcome">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Welcome
        </StyledLink>
        <StyledLink to="/signin">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Sign In
        </StyledLink>
        <StyledLink to="/signup">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Sign Up
        </StyledLink>
        <StyledLink to="/home">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Home
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
