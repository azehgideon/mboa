import { Container, Row } from "react-bootstrap";
import TopPane from "../components/landingpage/toppane";
import FlashScreen from "../components/landingpage/flashscreen";
import Footer from "../components/landingpage/footer";
import MoreContent from "../components/landingpage/morecontent";

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
        <Row>
          <MoreContent />
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
