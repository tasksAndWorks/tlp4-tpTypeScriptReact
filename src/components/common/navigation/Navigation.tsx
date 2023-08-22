
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

// Styles
import styles from './Navigation.module.css';
import { CommandLineIcon } from "@heroicons/react/24/outline";

export const Navigation = () => {
  return (
    <Navbar
        bg="primary"
        data-bs-theme="secondary"
        className=""
    >
        <Container>
            <Navbar.Brand href="#home" className="d-flex m-0">
                <CommandLineIcon width={35} height={35} className="me-2"/>
                <p className="fs-4 m-0 fw-bold fst-italic">Home</p>
            </Navbar.Brand>

            <Nav className="d-flex ms-auto">
                <Nav.Link
                    className={styles["custom-hover"]}
                    href="#home"
                >
                    <p className="fs-6 p-0 m-0 fw-bold">My GitHub</p>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
