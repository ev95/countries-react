import CountryItem from '../../Components/CountryItem/CountryItem'
import './Home.css'

function Home({ countries }) {
    return (
        <div className='countries-list'>
            {countries.map(country => {
                return (
                    <CountryItem country={country} />
                )
            })}
        </div>
    )
}

export default Home