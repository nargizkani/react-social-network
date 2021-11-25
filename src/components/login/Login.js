import {useState} from "react"
import {useNavigate} from "react-router";
import './Login.css';

export default function Login({authed, setAuthed}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        if (username === 'user1' && password === 'user1') {
            setAuthed(true);
            navigate('/home', {replace: true})
        } else {
            setErrorMessage('Invalid username or password');
        }
    }

    return (
        <div className="container">
            <div className="card card-login mx-auto text-center bg-dark">
                <div className="card-header mx-auto bg-dark">
                    <img src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon.png" className="w-75" alt="Logo"/><br/>
                    <span className="logo_title mt-5"> Login Dashboard </span>

                </div>
                <div className="card-body">
                    <form action="" method="post">
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="username" className="form-control" placeholder="Username"
                                   value={username}
                                   onChange={(event) => setUsername(event.target.value)}/>
                            <small className="form-text text-muted">Username is: user1</small>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" name="password" className="form-control" placeholder="Password"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}/>
                            <small className="form-text text-muted">Password is: user1</small>
                        </div>

                        <div className="form-group">
                            <button type="submit" name="btn" value="Login"
                                    className="btn btn-outline-danger float-right login_btn" onClick={onSubmit}>Submit</button>
                        </div>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </div>

    )
}

