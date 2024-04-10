import { DeleteUserButton } from 'components/DeleteUser/DeleteUserBtn.styled';
import { ModalLogOutContainer } from 'components/Header/logOutModal/logOutModal.styled';
import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { useState } from 'react';
import { ReactComponent as Xmark } from '../../components/Header/headerIcons/Xmark.svg';
import { useDispatch } from 'react-redux';
import authApi from '../../redux/auth/authOperations';

export const DeleteUserBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

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
          <div className="logOutDiv2">
            <p className="logOutP2">
              Do you really want to delete your profile?
            </p>
          </div>
          <div className="logOutDiv3">
            <button
              className="logOutButtonDelete"
              onClick={() => dispatch(authApi.deleteUserThunk())}
            >
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
