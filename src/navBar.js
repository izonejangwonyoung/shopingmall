import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>

            <br/>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Cat Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="detail/0">Detail</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="event">Event</Nav.Link>
                        <Nav.Link href="cart">Cart</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;