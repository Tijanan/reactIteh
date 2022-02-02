import { useState } from 'react'

function StanjeFrm(props) {

    const [kod, setKod] = useState('');

    function postaviKod(e) {
        setKod(e.target.value)
    }

    function vratiStanje(kod) {
        for (var i in props.korisnici) {
            if (props.korisnici[i].kod === kod) {
                alert('Trenutno stanje: ' + props.korisnici[i].stanje);
                return;
            }
        }
        alert('Unesite ispravan kod!');
    }

    return (
        <div className="pocetna">
            <div className="group">
                <label className='mt-4'>Unesite kod: </label>
                <input type={'text'} className="form-control mt-2 mb-3" id='unos-kod-input' value={kod} onChange={postaviKod} />
                <button type="button" onClick={() => vratiStanje(kod)} className='btn btn-primary' id='login_button' >Stanje</button>
            </div>
        </div>
    );
}

export default StanjeFrm;
