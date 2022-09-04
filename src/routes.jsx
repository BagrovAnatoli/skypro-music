import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { MyTracks } from './pages/my-tracks';
import { Playlist }from './pages/playlist';
import { NotFound } from './pages/not-found';
// import { ProtectedRoute } from './components/ProtectedRoute';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/my-tracks" element={<MyTracks />} />
            <Route path="/playlist/:id" element={<Playlist />} />

            {/* <Route
                path="/account"
                element={
                    <ProtectedRoute isAllowed={Boolean(user)}>
                        <Account />
                    </ProtectedRoute>
                }
            /> */}

            {/* <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/account" element={<Account />} />
                <Route path="/wallet" element={<Wallet />} />
            </Route> */}
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}