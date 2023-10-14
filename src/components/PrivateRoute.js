import { Navigate } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';
import { useAllSelectors } from "./hooks/index";


const PrivateRoute = ({ children: CataloguePage }) => { 
    const { auth } = useAllSelectors();
    // const location = useLocation();    
    const shouldRedirect = !auth.isLoggedIn && !auth.isRefreshing;

    return shouldRedirect ? <Navigate to='/login' /> : CataloguePage;  //state={{ location }} //якщо токен є, побачиш контакти, а якщо немає - повернешся на логін/реєстрацію
}

export default PrivateRoute;