import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Loader } from '../Loader/index';
import { Header } from '../Header/Header';
import { setToken, fetchCurrentUserThunk, logoutThunk } from '../../redux/authOperations';


const Layout = () => {

    const { token, user } = useSelector((state) => state.auth); 
    const dispatch = useDispatch();   

    useEffect(() => {
        if(token && !user) { 
            setToken(token)
            dispatch(fetchCurrentUserThunk()).unwrap().catch(() => dispatch(logoutThunk())) // error catch
        }
    }, [token, dispatch, user])

	return (
		<div>
			<Header />
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Layout;