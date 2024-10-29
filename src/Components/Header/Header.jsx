import './Header.css'
import { API } from '../../api/api';
import { NavLink } from 'react-router-dom';

function Header({ dispatch }) {
    const regions = ["Asia", "Antarctic", "Americas", "Africa", "Europe", "Oceania"];
    const changeRegion = (region) => {
        if (region === 'all') {
            API.getAll(dispatch)
        } else {
            API.getARegion(dispatch, region)
        }
    }

    return (
        <header>
            <div className="container header">
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src="https://www.freeiconspng.com/uploads/globe-png-15.png" />
                    </NavLink>
                </div>
                <div></div>
                <div className="search">
                    <span className='filter-text'>Filter by Region </span>
                    <select className='regions-select' onChange={(e) => changeRegion(e.target.value)}>
                        <option value={'all'}>None</option>
                        {
                            regions.map((region, index) => {
                                return (
                                    <option key={index} value={region}>{region}</option>
                                )
                            })
                        }

                    </select>
                    <input type="text" id="search-input" placeholder="Search..." />
                </div>
            </div>
        </header>
    )
}

export default Header