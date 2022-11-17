import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Login from './components/Login';
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import MyQueue from './pages/MyQueue';
import MyPlaylists from './pages/MyPlaylists';
import MyFriends from './pages/MyFriends';
import { Route, Routes } from "react-router-dom"
import { useUserContext } from './contexts/userDataContext';
import useAuth from './useAuth';
import UserPage from './pages/UserPage';
import { useState } from "react";



function App() {
  const { userToken } = useUserContext();
  const code = userToken;
  const [page, setPage] = useState();
  useAuth(code)


  return (code ? <div>
    <Header code={code} page={page} setPage={setPage} />
    <div className="body">
      <NavBar code={code} page={page} setPage={setPage} />
      <div className="pages-container">
        <Routes code={code} page={page} setPage={setPage}>
          <Route path="/" element={<MyQueue />} />
          <Route page={page} setPage={setPage} code={code} path="/myplaylists" element=
            <MyPlaylists page={page} setPage={setPage} code={code} />
          />
          <Route path="/myfriends" element={<MyFriends />} />
          <Route path="/login" element={<Login />} />
          <Route page={page} setPage={setPage} path="/userPage" element={<UserPage page={page} setPage={setPage} />} />
        </Routes>
      </div>
    </div>

  </div> : <Login />)
}

export default App;
