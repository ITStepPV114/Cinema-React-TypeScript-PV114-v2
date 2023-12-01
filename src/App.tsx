import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './components/Home';
import MoviesList from './components/movies/MoviesList';
import Login from './components/accounts/Login';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getTokenFromLocalStorage } from './helpers/localStorage.helper';
import { AuthService } from './services/auth.service';
import { login, logout } from './store/user/userSlise';
import { useAuthUser } from './hooks/useUser';
import { useAuth } from './hooks/useAuth';
import Registartion from './components/accounts/Registration';
import ProtectedRoute from './ProtectRoter';


function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.user)

  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();
    try {
      if (token) {
        if (data) {
          dispatch(login(data));

        }
        else {
          dispatch(logout());
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkAuth();


  }, [])


  return (
    <div className="App">
      {/* <h2> App React TypeScript </h2> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="movies" element={<MoviesList />} />
            
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="Registration" element={<Registartion />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App;
