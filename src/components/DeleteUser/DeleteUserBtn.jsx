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

export const DeleteUserBtn = () => {
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
    const { payload } = await dispatch(
      authApi.verifyPasswordThunk({ password: passwordInput })
    );
    if (payload.isCorrectPass) await dispatch(authApi.deleteUserThunk());
  };
  return (
    <>
      <DeleteUserButton onClick={() => setIsOpen(!isOpen)}>
        Delete user
      </DeleteUserButton>
      <ModalOverlay isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalLogOutContainer>
          <div className="logOutDiv1">
            <p className="logOutP1">DELETE user</p>
            <Xmark
              className="xMarkWrapper"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <DeleteContainer>
            <p className="logOutP2">
              Do you really want to delete your profile?
            </p>
            <InputDiv>
              <DeleteInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
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
              DELETE
            </button>
            <button
              className="logOutButtonCancel"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cancel
            </button>
          </div>
        </ModalLogOutContainer>
      </ModalOverlay>
    </>
  );
};
