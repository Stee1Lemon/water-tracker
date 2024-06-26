import {
  DeleteContainer,
  DeleteInput,
  DeleteUserButton,
  IconBtn,
  InputDiv,
} from 'components/DeleteUser/DeleteUserBtn.styled';
import { ModalLogOutContainer } from 'components/Header/logOutModal/logOutModal.styled';
import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { useState } from 'react';
import { ReactComponent as Xmark } from '../../components/Header/headerIcons/Xmark.svg';
import { useDispatch } from 'react-redux';
import authApi from '../../redux/auth/authOperations';
import icons from '../../assets/icons.svg';
import Notiflix from 'notiflix';
import { useTranslation } from 'react-i18next';

export const DeleteUserBtn = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleDelete = async () => {
    const result = await dispatch(
      authApi.verifyPasswordThunk({ password: passwordInput })
    );
    if (result.error)
      if (result.error) return Notiflix.Notify.failure(result.payload);
    if (result.payload.isCorrectPass) await dispatch(authApi.deleteUserThunk());
  };
  return (
    <>
      <DeleteUserButton onClick={() => setIsOpen(!isOpen)}>
        {t('deleteUserModal.deleteUserbtn')}
      </DeleteUserButton>
      <ModalOverlay isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalLogOutContainer>
          <div className="logOutDiv1">
            <p className="logOutP1">{t('deleteUserModal.deleteUserbtn')}</p>
            <Xmark
              className="xMarkWrapper"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <DeleteContainer>
            <p className="logOutP2">{t('deleteUserModal.question')}</p>
            <InputDiv>
              <DeleteInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder={t('authForm.placeholdPassword')}
                value={passwordInput}
                onChange={handlePassword}
                style={{
                  color: 'var(--primary-focus)',
                  border: '1px solid var(--secondary-fifth)',
                }}
              />
              <IconBtn
                type="button"
                className="icon-eye"
                onClick={toggleVisibility}
                style={{
                  top: '30%',
                }}
              >
                <svg width="16" height="16" className="icon">
                  <use
                    href={
                      showPassword
                        ? icons + '#icon-opened-eye'
                        : icons + '#icon-closed-eye'
                    }
                  ></use>
                </svg>
              </IconBtn>
            </InputDiv>
          </DeleteContainer>
          <div className="logOutDiv3">
            <button className="logOutButtonDelete" onClick={handleDelete}>
              {t('deleteEntryModal.buttonDelete')}
            </button>
            <button
              className="logOutButtonCancel"
              onClick={() => setIsOpen(!isOpen)}
            >
              {t('deleteEntryModal.buttonCancel')}
            </button>
          </div>
        </ModalLogOutContainer>
      </ModalOverlay>
    </>
  );
};
