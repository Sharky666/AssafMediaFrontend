import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/authService';
import './loginPage.css';

const LoginPage = props => {
    const history = useHistory();

    const email = useRef(null);
    const password = useRef(null);
    const isAdmin = useRef(null);

    // TODO: make the UI prettier
    // TOOD: hopefully make valid token calls. otherwise probably just comment-out the JWT middleware or save it in local-storage for POC
    // TODO: display a message on the screen that notifies the user if there is something invalid about their input (bad email / password)

    return (
        <div className="container">
            <div className="login-container">
                <form action="login">
                    <div className="row">
                        <div className="input-field col-12 col-md-6">
                            <input type="email" ref={email} placeholder="email" className="email-input" />
                        </div>
                        <div className="input-field col-12 col-md-6">
                            <input type="password" ref={password} placeholder="password" className="password-input" />
                        </div>
                    </div>
                    <input type="checkbox" className='is-admin-checkbox' ref={isAdmin} />
                    <span className="checkbox-text">Dude, are you an admin?</span>
                    <div className="buttons-container">
                        <div onClick={onLoginClick} className="submission-button unselectable">
                            <span>Login</span>
                        </div>
                        <div onClick={onRegisterClick} className="submission-button unselectable">
                            <span>Register</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

    function onLoginClick() {
        const user = getCurrentUserObject();
        console.log(user);
        AuthService.login(user).then(value => {
            history.push('/game');
            console.log(value);
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    function onRegisterClick() {
        const user = getCurrentUserObject();
        console.log(user);
        AuthService.register(user).then(value => {
            history.push('/game');
            console.log(value);
        })
        .catch(err => {
            console.log(err);
        });
    }

    function getCurrentUserObject() {
        return {
            email: email.current.value,
            password: password.current.value,
            isAdmin: + isAdmin.current.checked
        }
    }
}

export default LoginPage;