// import Modal from 'components/Modal/Modal';
import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ModalLogOutContainer } from './logOutModal.styled';
import { useDispatch } from 'react-redux';
import authApi from '../../../redux/auth/authOperations';
import { waterSlice } from '../../../redux/water/waterSlice';
import ModalOverlay from 'components/ModalOverlay/ModalOverlay';

const LogOutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authApi.logoutThunk());
    dispatch(waterSlice.actions.cleanWaterRedux());
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <ModalLogOutContainer>
        <div className="logOutDiv1">
          <p className="logOutP1">Log out</p>
          <Xmark className="xMarkWrapper" onClick={onClose} />
        </div>
        <div className="logOutDiv2">
          <p className="logOutP2">Do you really want to leave?</p>
        </div>
        <div className="logOutDiv3">
          <button className="logOutButtonDelete" onClick={handleLogOut}>
            Log out
          </button>
          <button className="logOutButtonCancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </ModalLogOutContainer>
    </ModalOverlay>
  );
};

export default LogOutModal;
