import TopPane from "../components/toppane";
import SideMenu from "../components/sidemenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <TopPane />
      </Row>
      <Row>
        <Col xs={3}>
          <SideMenu />
        </Col>
        <Col xs={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
