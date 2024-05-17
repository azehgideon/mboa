import { Container, Row } from "react-bootstrap";
import TopPane from "../components/landingpage/toppane";
import FlashScreen from "../components/landingpage/flashscreen";

const Footer = () => {
  return <p>Footer</p>;
};
const LandingPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <TopPane />
        </Row>
        <Row>
          <FlashScreen />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
