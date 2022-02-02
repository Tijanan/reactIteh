import LoginFrm from './LoginFrm'
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate()
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
                navigate('/stanje')
            }
        }
        alert('Molimo pokušajte ponovo!')
    }



    return (
        <div className="login">
            <h1 id='login-naslov'>Login</h1>
            <LoginFrm login={login} />
        </div>
    );
}

export default Login;
