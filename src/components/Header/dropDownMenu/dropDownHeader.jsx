import { DropdownMenu } from './dropDownHeader.styled';
import { ReactComponent as UserCog } from '../headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from '../headerIcons/UserLogOut.svg';
import LogOutModal from '../logOutModal/logOutModal';
import { useState } from 'react';
import SettingsModal from '../settingsModal/settingsModal';
import { useTranslation } from 'react-i18next';

const DropDownHeader = ({ menuRef, isMenuVisible, toggleDropDown }) => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleLogOutModal = () => {
    toggleDropDown();
    setLogoutModalOpen(!isLogoutModalOpen);
  };

  const handleSettingsModal = () => {
    toggleDropDown();
    setSettingsModalOpen(!isSettingsModalOpen);
  };

  return (
    <>
      <DropdownMenu ref={menuRef} className={isMenuVisible ? 'visible' : ''}>
        <div className="dropDownElement">
          <button className="dropDownButton" onClick={handleSettingsModal}>
            <UserCog className="svgCog" />
            {t('header.setting')}
          </button>
        </div>
        <div className="dropDownElement" onClick={handleLogOutModal}>
          <button className="dropDownButton">
            <UserLogOut className="svgLogOut" />
            {t('header.logout')}
          </button>
        </div>
      </DropdownMenu>
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setSettingsModalOpen(!isSettingsModalOpen)}
      />
      <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setLogoutModalOpen(!isLogoutModalOpen)}
      />
    </>
  );
};

export default DropDownHeader;
