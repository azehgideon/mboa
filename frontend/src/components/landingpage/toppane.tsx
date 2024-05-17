import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../logo";

const TopPane = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="d-flex justify-content-end">
          <Nav.Link
            style={{ fontWeight: "bold", fontStyle: "underline" }}
            href="/"
          >
            Acceuil
          </Nav.Link>
          <Nav.Link href="/">Nos plans</Nav.Link>
          <Nav.Link href="/">Bon plans</Nav.Link>
          <Nav.Link href="/">Camtel home</Nav.Link>
          <Nav.Link href="/">Contactez camtel</Nav.Link>
          <Button variant="link">Sign up</Button>
          <Button variant="primary">Log in</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TopPane;
