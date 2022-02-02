import LoginFrm from './LoginFrm'
import { Navigate } from 'react-router-dom';

function Login() {

    var korisnici = [
        { username: 'Nikola', password: 'Nikolic', stanje: 125000 },
        { username: 'Nevena', password: 'Petrovic', stanje: 84000 },
        { username: 'Dragana', password: 'Ilic', stanje: 75000 },
        { username: 'Nemanja', password: 'Velickovic', stanje: 160000 },
    ];


    function login(username, password) {
        for (var i in korisnici) {
            if (korisnici[i].username === username && korisnici[i].password === password) {
                alert('Dobro došli ' + username + " " + password);
                <Navigate to={{
                    pathname: '/stanje',
                    state: { id: '123' }
                }
                }
                />
            }

        }
    }

    return (
        <div className="login">
            <LoginFrm login={login} />
        </div>
    );
}

export default Login;
