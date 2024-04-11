import { ReactComponent as Xmark } from '../headerIcons/Xmark.svg';
import { ModalLogOutContainer } from './logOutModal.styled';
import { useDispatch } from 'react-redux';
import authApi from '../../../redux/auth/authOperations';
import { waterSlice } from '../../../redux/water/waterSlice';
import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { useTranslation } from 'react-i18next';

const LogOutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogOut = () => {
    dispatch(authApi.logoutThunk());
    dispatch(waterSlice.actions.cleanWaterRedux());
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <ModalLogOutContainer>
        <div className="logOutDiv1">
          <p className="logOutP1">{t('logoutModal.logout')}</p>
          <Xmark className="xMarkWrapper" onClick={onClose} />
        </div>
        <div className="logOutDiv2">
          <p className="logOutP2">{t('logoutModal.question')}</p>
        </div>
        <div className="logOutDiv3">
          <button className="logOutButtonDelete" onClick={handleLogOut}>
            {t('logoutModal.buttonLogout')}
          </button>
          <button className="logOutButtonCancel" onClick={onClose}>
            {t('logoutModal.buttonCancel')}
          </button>
        </div>
      </ModalLogOutContainer>
    </ModalOverlay>
  );
};

export default LogOutModal;
