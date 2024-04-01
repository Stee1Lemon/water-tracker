import { DropdownMenu } from "./dropDownHeader.styled";
import { ReactComponent as UserCog } from '../headerIcons/UserCog.svg';
import { ReactComponent as UserLogOut } from '../headerIcons/UserLogOut.svg';

const DropDownHeader = ({menuRef, isMenuVisible, toggleSettingsModal, toggleLogoutModal}) => {

    return (
        <DropdownMenu
        ref={menuRef}
        className={isMenuVisible ? 'visible' : ''}
      >
        <div className="dropDownElement">
          <button className="dropDownButton" onClick={toggleSettingsModal}>
            <UserCog className="svgCog" />
            Setting
          </button>
        </div>
        <div className="dropDownElement" onClick={toggleLogoutModal}>
          <button className="dropDownButton">
            <UserLogOut className="svgLogOut" />
            Log out
          </button>
        </div>
      </DropdownMenu>
    )
};

export default DropDownHeader;