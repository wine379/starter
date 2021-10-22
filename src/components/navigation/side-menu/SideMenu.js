import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as Icon from 'react-feather';
import './SideMenu.css';

const SideMenuDark = (props) => {
    return (
        <div className={`sidemenu-area ${props.menuColor ? 'sidemenu-light' : ''} ${props.sideMenu ? 'sidemenu-toggle' : ''}`}>
            <Navbar className={`sidemenu ${props.sideMenu ? 'hide-nav-title' : ''}`} >
                <Navbar.Collapse>
                    <Nav>
                        <NavLink 
                            to="/dashboard/" 
                            className="nav-link" 
                            activeClassName="drpMenu"
                            >
                                <Icon.Grid className="icon" /> 
                                <span className="title">Dashboard</span>
                            </NavLink>
                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.Target
                                        className="icon"
                                    />
                                    <span className="title">
                                        Programmes
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/basic-livelihood" 
                                className="dropdown-item">
                                <Icon.Play 
                                    className="icon" 
                                />
                                Basic Livelihood
                            </NavLink>
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/enhenced-livelihoods" 
                                className="dropdown-item">
                                <Icon.FastForward 
                                    className="icon" 
                                />
                                Enhanced Livelihood
                            </NavLink>
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/graduation" 
                                className="dropdown-item">
                                <Icon.Star 
                                    className="icon" 
                                />
                                Graduation
                            </NavLink>
                            
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default SideMenuDark
