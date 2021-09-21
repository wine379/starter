import React, {useState} from 'react';

const ColorSwitch = (props) => {
    const [colorSwitchState, setColorSwitchState] = useState({darkMenu: true});
     const onSideMenuHandler = () => {
        const sideMenu = colorSwitchState.darkMenu;
        setColorSwitchState({ darkMenu:  !sideMenu});
        props.onClick(sideMenu);
    }
    return (
        <div className="side-menu-switch" title="Click to change sidebar color">
                <label className="switch">
                    <input 
                    type="checkbox" 
                    className="light" 
                    onClick={onSideMenuHandler}
                />
                    <span className="slider round"></span>
                </label>
            </div>
    )
}

export default ColorSwitch