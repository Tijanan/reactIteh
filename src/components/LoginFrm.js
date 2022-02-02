
import { useState } from 'react'

function LoginFrm(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function postaviUsername(e) {
        setUsername(e.target.value)
    }

    function postaviPassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="loginfrm">
            <form>
                <div className="group">
                    <label>Name: </label>
                    <input type={'text'} className="form-control mt-2 mb-3" value={username} onChange={postaviUsername} />
                </div>
                <div className="group">
                    <label>Lastname: </label>
                    <input type={'password'} className="form-control mt-2 mb-3" value={password} onChange={postaviPassword} />
                </div>
                <button type="button" onClick={() => props.login(username, password)} className='btn btn-primary' id='login_button' >Login</button>
            </form>
        </div>
    );
}

export default LoginFrm;
