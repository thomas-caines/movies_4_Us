import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Header() {
    return(
        <>
            <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand className='navbar_brand'>
                        Movies 4 Us
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <Nav.Link className='navbar_link' href="/home">Home</Nav.Link>
                            <Nav.Link className='navbar_link' href="/movies">Movies</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}