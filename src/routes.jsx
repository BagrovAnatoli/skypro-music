import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Playlist }from './pages/playlist';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './components/ProtectedRoute';
// import { authAPI } from './api/api';

export function AppRoutes({ cookie }) {

    // ('Ktotolya', 'bagrov.anatoli@gmail.com', 'Skypro-Music')

    // authAPI.signup('KtotolyaTest3', 'test@test3.com', 'Music-Test3').then((response) => {
    //     console.log(response);
    // });

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute redirectPath = "/login" isAllowed={cookie} />}>
                <Route path="/" element={<Main />} />
                <Route path="/my-tracks" element={<Playlist id="0" />} />
                <Route path="/playlist/:id" element={<Playlist />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
} 