import './Header.css'
import { API } from '../../api/api';
import { useNavigate, NavLink } from 'react-router-dom';
import { setSearchResultAC, setSearchTextAC } from '../../store/store.js'
import { useEffect, useState } from 'react';

function Header({ state, dispatch }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const regions = ["Asia", "Antarctic", "Americas", "Africa", "Europe", "Oceania"];

    useEffect(() => {
        if (state.searchText.length >= 2) {
            setIsOpen(true)
            API.searchCountries(dispatch, state.searchText)
        } else {
            setIsOpen(false);
        }

    }, [state?.searchText]);

    const changeRegion = (region) => {
        if (region === 'all') {
            API.getAll(dispatch)
        } else {
            API.getARegion(dispatch, region)
        }
    }

    const navigateTo = (name) => {
        navigate(`/${name}`);
        dispatch(setSearchTextAC(''));
        dispatch(setSearchResultAC([]))
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
                    <input value={state?.searchText} onChange={(e) => dispatch(setSearchTextAC(e.target.value))} type="text" id="search-input" placeholder="Search..." />
                    {isOpen &&
                        <div className='search-result'>
                            {state?.searchResult?.map((country) => {
                                return <span key={country.name.common} onClick={() => navigateTo(country.name.common)} className=''>{country.name.common}</span>
                            })}
                            {state.errorMessage && state?.searchResult.length === 0 && <span>{state.errorMessage}</span>}
                        </div>}
                </div>
            </div>
        </header>
    )
}

export default Header