import UserPanel from "./userpanel";
import Logo from "./logo";
import SearchBox from "./searchbox";
import { Container, Row, Col } from "react-bootstrap";
const TopPane = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Container>
        <Row>
          <Col xs={1}>
            <Logo />
          </Col>
          <Col xs={7}></Col>
          <Col xs={2}>
            <SearchBox />
          </Col>
          <Col xs={2}>
            <UserPanel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TopPane;
