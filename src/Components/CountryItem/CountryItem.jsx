import { NavLink } from 'react-router-dom'
import './CountryItem.css'

function CountryItem({ country }) {
    return (
        <div className="country-selector">
            <NavLink to={`/${country.name.common}`}>
                <img src={country.flags.png} alt="United States Flag" className="flag" />
                <span className="country-name">{country.name.common}</span>
            </NavLink>
        </div>
    )
}

export default CountryItem