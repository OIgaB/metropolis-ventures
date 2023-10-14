import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../redux/authOperations';
import { useAllSelectors } from "../hooks/index";
import { Container, Name, Button } from './styled';


export const UserMenu = () => {       
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useAllSelectors();

    const handleLogOut = () => {
        dispatch(logoutThunk());   
    }

    return (
        <Container>
            {auth.user && <Name>{auth.user.name}</Name>}      {/* user - {name: '...', email: '...'} */}
            <Button type="button" onClick={() => auth.isLoggedIn ? handleLogOut() : navigate('/login')}>
                {auth.isLoggedIn ? 'Logout' : 'Login'}
            </Button>
        </Container> 
    );
}