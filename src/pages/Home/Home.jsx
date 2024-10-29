import { useContext } from 'react';
import CountryItem from '../../Components/CountryItem/CountryItem'
import './Home.css'
import { MainContext } from '../../App';

function Home() {
    const { state } = useContext(MainContext);
    const countries = state.countries;

    return (
        <div className="container">
            <div className='countries-list'>
                {countries.map(country => {
                    return (
                        <CountryItem key={country.name.common} country={country} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home