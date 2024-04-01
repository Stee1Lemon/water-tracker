import { useSelector } from 'react-redux';
import { HeaderSigned } from './HeaderSigned/HeaderSigned';
import { Header } from './Header/Header';

const HeaderCombined = () => {
    const isAuthenticated = useSelector((state) => state.authTest.auth);

    return (
        <>
            {isAuthenticated?<HeaderSigned />: <Header />}
        </>
    )
}

export default HeaderCombined;