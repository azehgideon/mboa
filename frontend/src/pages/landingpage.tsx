import { Container, Row } from "react-bootstrap";
import TopPane from "../components/landingpage/toppane";
import FlashScreen from "../components/landingpage/flashscreen";
import Footer from "../components/landingpage/footer";

const LandingPage = () => {
  return (
    <div className="mx-10">
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
