import CountryItem from '../../Components/CountryItem/CountryItem'
import './Home.css'

function Home({ countries }) {
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