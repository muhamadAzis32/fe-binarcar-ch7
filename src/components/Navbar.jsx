import { Link } from "react-router-dom";
//import component Bootstrap React
import { Nav, DropdownButton, Dropdown } from 'react-bootstrap';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

function Navbar() {

    const dispatch = useDispatch();
    const { isAuthenticated, user, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-abu fixed-top">
            <div className="container">
                <Nav.Link as={Link} to="/" className="navbar-brand"><img src="asset/gambar/logo.svg" alt="logo-bcr"></img></Nav.Link>
                {/* <a className="navbar-brand" href="/"><img src="asset/gambar/logo.svg" alt="logo-bcr"></img></a> */}
                <button className="btn navbar-toggler border-3 px-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon text-black"></span>
                </button>

                <div className="offcanvas offcanvas-start-lg bg-abu" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header d-flex d-lg-none">
                        <h6 className="offcanvas-title text-black" id="offcanvasExampleLabel"><strong>BCR</strong></h6>
                        <Nav.Link href="" className="text-reset p-0" data-bs-dismiss="offcanvas" aria-label="close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000"
                                className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </Nav.Link >
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">

                                <Nav.Link as={Link} to="/" className="nav-link">Our Services</Nav.Link>
                            </li>
                            <li className="nav-item">

                                <Nav.Link as={Link} to="/" className="nav-link">Why Us</Nav.Link>
                            </li>
                            <li className="nav-item">

                                <Nav.Link as={Link} to="/" className="nav-link">Testimonial</Nav.Link>
                            </li>
                            <li className="nav-item">

                                <Nav.Link as={Link} to="/" className="nav-link">FAQ</Nav.Link>
                            </li>
                            {!isAuthenticated ? (
                                <Nav.Link as={Link} to="/register" className="btn nav-item-btn ms-3 text-white">Register</Nav.Link>
                            ) : (
                                <>
                                    <DropdownButton variant="success" size="sm" id="dropdown-basic-button" title={user.name} className="ms-3 ">
                                        <Dropdown.Item size="sm" onClick={handleLogout}>Logout</Dropdown.Item>
                                    </DropdownButton>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar