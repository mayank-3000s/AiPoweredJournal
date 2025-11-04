import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { AppLayout } from './components/Layout/Applayout';
import { HomePage } from './pages/HomePage';
import { LoadingPage } from './pages/LoadingPage';
import ErrorPage from './pages/ErrorPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { useEffect, useState } from 'react';
import { ProfilePage } from './pages/ProfilePage';
import { getToken, removeToken, saveToken } from './localstorage/tokenLS';
import { UpdateProfilePage } from './pages/UpdateProfilePage';
import { EntryPage } from './pages/EntryPage';
import { WeeklySummaryPage } from './pages/WeeklySummaryPage';
import { ContactPage } from './pages/ContactPage';

const App = ()=>{
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [userinfo, setUserInfo] = useState({
    name: '',
    email: '',
    createdAt: '',
  })
  const [token, setToken] = useState(() => getToken());
  useEffect(() => {
    if (token) {
      saveToken(token)
    } else {
      removeToken()
    }
  }, [token]);
  const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout token={token} setToken={setToken}/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/loading',
        element: <LoadingPage/>
      },
      {
        path: '/login',
        element: <LoginPage userData={userData} setUserData={setUserData} token={token} setToken={setToken}/>
      },
      {
        path: '/Signup',
        element: <SignupPage userData={userData} setUserData={setUserData} setToken={setToken}/>
      },
      {
        path: '/profile',
        element: <ProfilePage token={token} setToken={setToken} userinfo={userinfo} setUserInfo={setUserInfo}/>
      },
      {
        path: '/update-profile',
        element: <UpdateProfilePage token={token} setToken={setToken}  userinfo={userinfo} setUserInfo={setUserInfo}/>
      },
      {
        path: '/entries',
        element: <EntryPage token={token} userinfo={userinfo} setUserInfo={setUserInfo}/>
      },
      {
        path: '/weekstats',
        element: <WeeklySummaryPage token={token}/>
      },{
        path: '/contact',
        element: <ContactPage/>
      }
    ]
  }])

  useEffect(()=>{

  })

  return(
    <RouterProvider router={router}/>
  )
}

export default App;
