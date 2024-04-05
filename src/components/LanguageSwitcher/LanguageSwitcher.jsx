import i18n from 'i18next';
import icons from '../../assets/icons.svg';
import { Container, Button } from './LanguageSwitcher.styled';

export const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Button type="button" onClick={() => changeLanguage('en')}>
        <svg width="40" height="25">
          <use href={icons + '#icon-uk-flag'}></use>
        </svg>
      </Button>
      <Button type="button" onClick={() => changeLanguage('uk')}>
        <svg width="40" height="25">
          <use href={icons + '#icon-ua-flag'}></use>
        </svg>
      </Button>
    </Container>
  );
};
