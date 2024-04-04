import Modal from 'components/Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ModalLogOutContainer } from './logOutModal.styled';
import { useDispatch } from 'react-redux';
import authApi from '../../../redux/auth/authOperations';

const LogOutModal = ({ isLogoutModalOpen, toggleLogoutModal }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authApi.logoutThunk());
  };

  return (
    <Modal isOpen={isLogoutModalOpen} onClose={toggleLogoutModal}>
      <ModalLogOutContainer>
        <div className="logOutDiv1">
          <p className="logOutP1">Log out</p>
          <Xmark className="xMarkWrapper" onClick={toggleLogoutModal} />
        </div>
        <div className="logOutDiv2">
          <p className="logOutP2">Do you really want to leave?</p>
        </div>
        <div className="logOutDiv3">
          <button className="logOutButtonDelete" onClick={handleLogOut}>
            Log out
          </button>
          <button className="logOutButtonCancel" onClick={toggleLogoutModal}>
            Cancel
          </button>
        </div>
      </ModalLogOutContainer>
    </Modal>
  );
};

export default LogOutModal;
