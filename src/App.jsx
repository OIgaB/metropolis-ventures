import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import { SharedLayout } from './components/SharedLayout';
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import ('./pages/LoginPage'));
const CataloguePage = lazy(() => import ('./pages/CataloguePage'));
const FavoritesPage = lazy(() => import ('./pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


function App() {
  return (
      <Routes>
        <Route path='/' element={<Navigate to="/home" />}>   
        <Route index element={<Layout/>} />          {/* Header і Outlet (children) */}
            <Route path='/home' exact element={<HomePage/>} redirectTo="/catalogue" />      
            <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
            <Route path="" element={<SharedLayout />}> 
              <Route path='/catalogue' element={<PrivateRoute><CataloguePage /></PrivateRoute>} /> 
              <Route path="/favorites" element={ <PrivateRoute><FavoritesPage /></PrivateRoute> } redirectTo="/catalogue" />  
            </Route>
        </Route>  
        <Route path="*" exact={true} element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;

