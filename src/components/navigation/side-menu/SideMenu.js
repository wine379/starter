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
                        <NavDropdown title= {
                            <div className="dropdown-title">
                                <Icon.Grid 
                                    className="icon"
                                /> 
                                <span className="title">
                                    Dashboard 
                                    <Icon.ChevronRight 
                                        className="icon fr"
                                    /> 
                                </span>
                            </div>
                        }
                        id="basic-nav-dropdown">
                            <NavLink 
                                to="/dashboard" 
                                className="dropdown-item" 
                                activeClassName="drpMenu">
                                <Icon.ChevronRight 
                                    className="icon" 
                                /> 
                                LWSP Default
                            </NavLink>
                            
                        </NavDropdown>


                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.Sliders
                                        className="icon"
                                    />
                                    <span className="title">
                                        System Administration
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/contractor-management" 
                                className="dropdown-item">
                                <Icon.UserX 
                                    className="icon" 
                                />
                                Contractor Management
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/product-management" 
                                className="dropdown-item"> 
                                <Icon.UserX 
                                    className="icon" 
                                /> 
                                Products and Services
                            </NavLink>
                            
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/user-management" 
                                className="dropdown-item">
                                <Icon.Users
                                    className="icon" 
                                />
                                User Management
                            </NavLink>
                        </NavDropdown>
                        
                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.Users 
                                        className="icon"
                                    />
                                    <span className="title">
                                        Household Beneficiaries
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/registration" 
                                className="dropdown-item">
                                <Icon.Database 
                                    className="icon" 
                                />
                                Registration
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/enrollment" 
                                className="dropdown-item"> 
                                <Icon.Database 
                                    className="icon" 
                                /> 
                                Enrollment 
                            </NavLink>
                            
                        </NavDropdown>
                        
                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.Send 
                                        className="icon"
                                    />
                                    <span className="title">
                                        Request for Service
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/technology-choice" 
                                className="dropdown-item">
                                <Icon.Database 
                                    className="icon" 
                                />
                                Technology Choice
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/technology-selection" 
                                className="dropdown-item"> 
                                <Icon.Database 
                                    className="icon" 
                                /> 
                                Technology Selection 
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/technology-approval" 
                                className="dropdown-item">
                                <Icon.Check 
                                    className="icon" 
                                />
                                Approval or Rejection
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/technology-cost" 
                                className="dropdown-item">
                                <Icon.DollarSign
                                    className="icon" 
                                />
                                Technology Cost
                            </NavLink>
                        </NavDropdown>

                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.DollarSign
                                        className="icon"
                                    />
                                    <span className="title">
                                        Service Contributions
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/technology-contribution" 
                                className="dropdown-item"> 
                                <Icon.DollarSign 
                                    className="icon" 
                                /> 
                                Contribute for Service
                            </NavLink>
                            
                        </NavDropdown>

                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.Briefcase 
                                        className="icon"
                                    />
                                    <span className="title">
                                        OSS Works
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/contractor-allocation" 
                                className="dropdown-item">
                                <Icon.ExternalLink
                                    className="icon" 
                                />
                                Contractor Allocation
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/works-commencement" 
                                className="dropdown-item"> 
                                <Icon.Calendar 
                                    className="icon" 
                                /> 
                                Works Start
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/works-progress" 
                                className="dropdown-item">
                                <Icon.List 
                                    className="icon" 
                                />
                                Work Status Updates
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/works-completed" 
                                className="dropdown-item">
                                <Icon.Database
                                    className="icon" 
                                />
                                Works Completion
                            </NavLink>
                        </NavDropdown>

                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.FileText 
                                        className="icon"
                                    />
                                    <span className="title">
                                        Project Reports
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/household-reports" 
                                className="dropdown-item">
                                <Icon.ExternalLink
                                    className="icon" 
                                />
                                Household Reports
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/area-reports" 
                                className="dropdown-item"> 
                                <Icon.Calendar 
                                    className="icon" 
                                /> 
                                Block/Area Reports
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/project-reports" 
                                className="dropdown-item">
                                <Icon.List 
                                    className="icon" 
                                />
                                Overall Reports
                            </NavLink>
                        </NavDropdown>
                        
                        <NavDropdown 
                            className="super-color" 
                            title= {
                                <div className="dropdown-title">
                                    <Icon.Frown 
                                        className="icon"
                                    />
                                    <span className="title">
                                        Case Management
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        />
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                            <NavLink  
                                activeClassName="drpMenu"
                                to="/dashboard/cases-received" 
                                className="dropdown-item">
                                <Icon.ExternalLink
                                    className="icon" 
                                />
                                Received Complaints
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/cases-status" 
                                className="dropdown-item"> 
                                <Icon.Calendar 
                                    className="icon" 
                                /> 
                                Complaint Status
                            </NavLink>
                            <NavLink 
                                activeClassName="drpMenu"
                                to="/dashboard/cases-resolved" 
                                className="dropdown-item">
                                <Icon.List 
                                    className="icon" 
                                />
                                Resolved Complaints
                            </NavLink>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default SideMenuDark
