import React, {useState} from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';
import './Navigation.css';
import {
    Navbar, 
    Nav, 
    NavDropdown, 
    Image
} from 'react-bootstrap';

import ColorSwitch from '../common/ColorSwitch';

// Default dark side menu
import SideMenu from './side-menu/SideMenu';

// Logo image path
import Logo from '../../assets/img/logo.png';
import SmallLogo from '../../assets/img/small-logo.png';

// Profile & user image path

const Navigation = (props) => {
    const [state, setState] = useState({
                    sideMenu: false,
                    term: '',
                    menuColor: false
                });

   const  _toggleClass = () => {
        const currentSideMenu =state.sideMenu;
        setState({sideMenu: !currentSideMenu});
        props.onClick(state.sideMenu);
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        if (state.term){
            props.history.push('/search/');
        }
    }

    const onSideMenuHandler = (activeColor) => {
        setState({menuColor: activeColor})
    }
    return (
        <div className="page-wrapper">
            <Navbar fixed="top" className="top-menu">
                <Link to="/dashboard" className={`navbar-brand ${state.sideMenu ? 'navbar-logo' : ''}`}>
                    {/* Large logo */}
                    <Image src={Logo} alt="Logo" className="large-logo" /> 
                    {/* Small logo */}
                    <Image src={SmallLogo} alt="Small Logo" className="small-logo" /> 
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Burger menu */}
                <div className={`burger-menu ${state.sideMenu ? 'toggle-menu' : ''}`} onClick={_toggleClass}>
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span> 
                </div>
                {/* End Burger menu */}

                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <h5 style={{ color: 'green' }}><b>COMSIP Integrated Management Information System</b></h5>

                    <Nav className="ml-auto right-nav">
                        <NavDropdown  
                            title={
                                <div className="count-info">
                                    <Icon.Mail 
                                        className="icon"
                                    />
                                    <span className="ci-number theme-bg">
                                        <span className="ripple theme-bg"></span>
                                        <span className="ripple theme-bg"></span>
                                        <span className="ripple theme-bg"></span>
                                    </span>
                                </div>
                            } 
                            id="basic-nav-dropdown" className="message-box d-none d-sm-block">
                            
                            <NavLink to="#" className="dropdown-item">
                                <div className="message-item">
                                    <span className="user-pic">
                                        
                                        <span className="profile-status online"></span>
                                    </span>
                                
                                    <span className="chat-content">
                                        <h5 className="message-title">System Admin</h5> 
                                        <span className="mail-desc">Just sent a new comment!</span>
                                    </span>
                                    <span className="time">0 seconds ago</span>
                                </div>
                            </NavLink>

                            <NavLink to="#" className="dropdown-item">
                                <div className="message-item">
                                    <span className="user-pic">
                                        
                                        <span className="profile-status ofline"></span>
                                    </span>
                                
                                    <span className="chat-content">
                                        <h5 className="message-title">Contractor Gibo</h5> 
                                        <span className="mail-desc">Just sent a new comment!</span>
                                    </span>
                                    <span className="time">5 minutes ago</span>
                                </div>
                            </NavLink>

                            <NavLink to="#" className="dropdown-item">
                                <div className="message-item">
                                    <span className="user-pic">
                                        
                                        <span className="profile-status away"></span>
                                    </span>
                                
                                    <span className="chat-content">
                                        <h5 className="message-title">Contractor Walu</h5> 
                                        <span className="mail-desc">Just sent a new comment!</span>
                                    </span>
                                    <span className="time">9:00 AM</span>
                                </div>
                            </NavLink>

                            <Link to="/inbox/" className="dropdown-item">
                                See all e-mails 
                                <Icon.ChevronRight 
                                    className="icon"
                                />
                            </Link>
                        </NavDropdown>

                        <NavDropdown  
                            title={
                                <div className="count-info">
                                    <Icon.Bell 
                                        className="icon"
                                    />
                                    <span className="ci-number">
                                        <span className="ripple"></span>
                                        <span className="ripple"></span>
                                        <span className="ripple"></span>
                                    </span>
                                </div>
                            } 
                            id="basic-nav-dropdown" className="message-box">

                            <NavLink to="#" className="dropdown-item">
                                <div className="message-item">
                                    <span className="user-pic">
                                        
                                        <span className="profile-status online"></span>
                                    </span>
                                
                                    <span className="chat-content">
                                        <h5 className="message-title">Admin</h5> 
                                        <span className="mail-desc">Just sent a new comment!</span>
                                    </span>
                                    <span className="time">0 seconds ago</span>
                                </div>
                            </NavLink>

                            <NavLink to="/" className="dropdown-item">
                                <div className="message-item">
                                    <span className="user-pic">
                                            
                                        <span className="profile-status ofline"></span>
                                    </span>
                                
                                    <span className="chat-content">
                                        <h5 className="message-title">Contractor Gibo</h5> 
                                        <span className="mail-desc">Just sent a new comment!</span>
                                    </span>
                                    <span className="time">5 minutes ago</span>
                                </div>
                            </NavLink>

                            <NavLink to="#" className="dropdown-item">
                                <div className="message-item">
                                    <span className="user-pic">
                                        
                                        <span className="profile-status away"></span>
                                    </span>
                                
                                    <span className="chat-content">
                                        <h5 className="message-title">Contractor Walu</h5> 
                                        <span className="mail-desc">
                                            New Assignments received! <span className="number">10</span>
                                        </span>
                                    </span>
                                    <span className="time">9:00 AM - 02-02-2019</span>
                                </div>
                            </NavLink>
                            
                            <Link to="/notifications/" className="dropdown-item">
                                Check all notifications
                                <Icon.ChevronRight 
                                    className="icon"
                                />
                            </Link>
                        </NavDropdown>

                        <NavDropdown  
                            title={
                                <div className="menu-profile">
                                    <span className="name">System Admin</span> 
                                    
                                </div>
                            } 
                            id="basic-nav-dropdown" className="profile-nav-item">
                            <NavLink to="/profile/" className="dropdown-item">
                                <Icon.User 
                                    className="icon"
                                /> 
                                Profile
                            </NavLink>
                            <NavLink to="/inbox/" className="dropdown-item">
                                <Icon.Inbox 
                                    className="icon"
                                /> 
                                Mailbox
                            </NavLink>
                            <NavLink to="/chat/" className="dropdown-item">
                                <Icon.HelpCircle 
                                    className="icon"
                                /> 
                                Support
                            </NavLink>
                            <NavLink to="/profile-settings/" className="dropdown-item">
                                <Icon.Settings 
                                    className="icon"
                                /> 
                                Settings
                            </NavLink>
                            <NavLink to="/login/" className="dropdown-item">
                                <Icon.LogOut 
                                    className="icon"
                                />
                                Logout
                            </NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>    
            
            {/* Side Menu File Path: src/components/Navigation/SideMenu/SideMenu.js */}
            {
                <SideMenu menuColor={state.menuColor} sideMenu={state.sideMenu} />
                
            }
            

            {/*  */}
            
            {/* Side Menu File Path: src/components/Common/ColorSwitch.js */}
            <ColorSwitch onClick={onSideMenuHandler} />
        </div>
    )
}

export default Navigation