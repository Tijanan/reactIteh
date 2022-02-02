
import StanjeFrm from './StanjeFrm'

function Stanje() {

    var korisnici = [
        { username: 'Nikola', password: 'Nikolic', kod: '12ab', stanje: 125000 },
        { username: 'Nevena', password: 'Petrovic', kod: '23bc', stanje: 84000 },
        { username: 'Dragana', password: 'Ilic', kod: '4b23', stanje: 75000 },
        { username: 'Nemanja', password: 'Velickovic', kod: 'ab13', stanje: 160000 },
    ];

    return (
        <div className="pocetna">
            <h1 className='mt-4'>E-banking</h1>
            <StanjeFrm korisnici={korisnici} />
        </div>
    );
}

export default Stanje;
