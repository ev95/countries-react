import { useParams } from 'react-router-dom'
import './CountryPage.css'
import { useEffect } from 'react';
import { API } from '../../api/api';
import CountryItem from '../../Components/CountryItem/CountryItem';

function CountryPage({ dispatch, state }) {
    const { name } = useParams();
    useEffect(() => {
        API.getCountry(dispatch, name);
        if (state?.country[0]?.borders) {
            API.getBorderCountries(dispatch, state?.country[0]?.borders.join(','))
        }
    }, [state.country])

    return (
        <div className="container country-wrapper">
            <div className="country-header">
                <img src={state?.country[0]?.flags.png} alt={state?.country[0]?.name.common} className="country-flag" />
                <h1>{state?.country[0]?.name.common} {state?.country[0]?.flag}</h1>
                <p><em>Official Name:</em> {state?.country[0]?.name.official}</p>
            </div>

            <section className="country-info">
                <h2>General Information</h2>
                <div className='info'>
                    <ul>
                        <li><strong>Capital:</strong> {state?.country[0]?.capital[0]}</li>
                        <li><strong>Region:</strong> {state?.country[0]?.region}</li>
                        <li><strong>Population:</strong> {state?.country[0]?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
                    </ul>
                    <ul>
                        <li><strong>Area:</strong> {state?.country[0]?.area} km²</li>
                        <li><strong>Currency:</strong> East Caribbean Dollar (XCD)</li>
                        <li><strong>Time Zone:</strong> {state?.country[0]?.timezones[0]}</li>
                    </ul>
                    <section className="country-symbols">
                        <img src={state?.country[0]?.coatOfArms.png} alt={`Coat of Arms of ${state?.country[0]?.name.common}`} className="coat-of-arms" />
                        <p><strong>Coat of Arms</strong></p>
                    </section>
                </div>
            </section>
            <section className='border-countries'>
                <h2>Border Countries</h2>
                <div className='countries-list'>
                    {
                        state?.border_countries?.map((country) => (
                            <CountryItem key={country.name.common} country={country} />
                        ))
                    }
                </div>

            </section>
            <section className="country-map">
                <h2>Location</h2>
                <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${state?.country[0]?.latlng[1]},${state?.country[0]?.latlng[0]}&layer=mapnik&zoom=100`} width="100%" height="300"></iframe>
                <p><a href={state?.country[0]?.maps?.googleMaps} target="_blank">View on Google Maps</a></p>
            </section>
        </div>
    )
}

export default CountryPage