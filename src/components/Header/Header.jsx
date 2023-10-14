import { useAllSelectors } from '../hooks/index';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import logoWhite from '../../images/logo-color-on-transparent-backgr.svg';
// import logoBlack from '../../images/logo-black-on-transparent-backgr.svg';
import { StyledLink, StyledHeader, Container } from './styled';


export const Header = () => {   
    const { auth } = useAllSelectors(); 

    return (
        <StyledHeader>
            <a href="/home" lang="en">
                {/* <img src={logoBlack} alt="Logo" width="16" height="16" />; */}
            </a>
            <nav>
                <Container>
                    <div>
                        <StyledLink to="/home">Home</StyledLink>
                        {auth.isLoggedIn && <StyledLink to="/catalogue">Real estate</StyledLink>}
                    </div>
                    {auth.isLoggedIn ? <UserMenu/> : <AuthNav/>}
                </Container>
            </nav>
        </StyledHeader>

                    // <Button type="button" onClick={() => isLoggedIn ? handleLogOut() : navigate('/login')}>
                    //     {isLoggedIn ? 'Logout' : 'Login'}
                    // </Button>              
    );
}