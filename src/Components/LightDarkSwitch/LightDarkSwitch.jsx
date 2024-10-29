import { IoMdSunny } from "react-icons/io";
import { FaCloudMoon } from "react-icons/fa";

import { setDarkModeAC } from "../../store/store.js"
import { MainContext } from "../../App";
import { useContext } from "react";
import './LightDarkSwitch.css'

function LightDarkSwitch() {
    const { state, dispatch } = useContext(MainContext);
    return (
        <div className='switch-wrapper'>
            <IoMdSunny className={!state.isDarkMode ? 'yellow' : ''} />
            <label className="switch">
                <input onChange={(e) => dispatch(setDarkModeAC(!state.isDarkMode))} checked={state.isDarkMode} type="checkbox" />
                <span className="slider round"></span>
            </label>
            <FaCloudMoon className={state.isDarkMode ? 'night' : ''} />
        </div>
    )
}

export default LightDarkSwitch