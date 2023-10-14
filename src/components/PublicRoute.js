// import { useRef } from "react";
import { Navigate } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';
import { useAllSelectors } from "./hooks/index";


const PublicRoute = ({ children: RegisterOrLoginPage }) => {  //children - це RegisterPage або LoginPage
    const { auth } = useAllSelectors();
 
    // const location = useLocation();
    // const savedLocation = useRef(location.state?.from ?? '/');
    // console.log(location.state);

    return auth.isLoggedIn ? <Navigate to='/catalogue' /> : RegisterOrLoginPage;   //{savedLocation.current} 
    // якщо ти не залогінений, то побачиш форму реєстрації/логіна, а якщо так - переадресує на ту сторінку контактів
}

export default PublicRoute;