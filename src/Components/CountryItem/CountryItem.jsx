import './CountryItem.css'

function CountryItem({ country }) {
    return (
        <div className="country-selector">
            <img src={country.flags.png} alt="United States Flag" className="flag" />
            <span className="country-name">{country.name.common}</span>
        </div>
    )
}

export default CountryItem