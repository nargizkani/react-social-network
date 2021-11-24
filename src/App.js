import {useState} from "react";
import {Link, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './App.css';
import Follower from "./components/Followers/Follower";
import Followers from "./components/Followers/Followers";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound";

export default function App() {
    const [authed, setAuthed] = useState(false);
    const navigate = useNavigate();

    function CheckIsAuthed({authed, children}) {
        return authed
            ? children
            : <Navigate to="/login" replace/>;
    }

    function logOut() {
        setAuthed(false);
        navigate('/');
    }

    return (
        <main>
            <nav>
                <div className="container wrapper">
                    <div>
                        <Link to={["/","/home"]} className="link">
                            Home
                        </Link>
                        <Link to="/profile" className="link">
                            Profile
                        </Link>
                        <Link to="/followers" className="link">
                            Followers
                        </Link>
                    </div>
                    {authed ? <span className="link" onClick={logOut}>Logout</span> :
                        <Link className="link" to='/login'>Login</Link>}
                </div>
            </nav>
            <Routes>
                <Route path="/home" element={<Home authed={authed}/>}/>
                <Route path="/" element={<Home authed={authed}/>}/>
                <Route path="*" element = {<NotFound/>}/>
                <Route path="/profile" element={
                    <CheckIsAuthed authed={authed}>
                        <Profile/>
                    </CheckIsAuthed>
                }/>
                <Route path="/followers" element={
                    <CheckIsAuthed authed={authed}>
                        <Followers/>
                    </CheckIsAuthed>
                }>
                    <Route path=":follower" element={<Follower/>}/>
                </Route>
                <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed}/>}/>

            </Routes>
        </main>
    )
}