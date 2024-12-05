import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid className='mx-3'>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                    <Nav className='gap-lg-3'>
                        <NavLink to='/' className='nav-link'>
                            Home
                        </NavLink>
                        <NavLink to='about' className='nav-link'>
                            About
                        </NavLink>
                        <NavLink to='contact-us' className='nav-link'>
                            Contact Us
                        </NavLink>
                        <NavLink to='register' className='nav-link'>
                            Sign Up
                        </NavLink>
                        {/* after sign in user name and their photo will show after login  */}
                        <NavLink to='login' className='nav-link'>
                            Sign In
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;