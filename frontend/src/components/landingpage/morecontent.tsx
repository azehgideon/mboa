import { Card, Col, Row, Image } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MoreContent = () => {
  return (
    <div className="mb-5">
      <h3 className="text-center mx-5 font-weight-bold ">
        <span className="text-primary">
          Vous n'êtes pas encore client Orange ?{" "}
        </span>
        <span className="text-dark">
          Nous sommes là pour vous aider à faire une demande. Voici la procédure
          à suivre.
        </span>
      </h3>
      <Row>
        <Col>
          <Card>
            <Image src="./images/form-svgrepo-com 1.jpg" width={83} />
            <Card.Title>Remplir un formulaire.</Card.Title>
            <Card.Text>
              Pour amorcer la procédure, il est d'une importance primordiale de
              remplir soigneusement le formulaire de demande d'installation. Ce
              formulaire ne réclame que 2 minutes de votre précieux temps, mais
              il constitue une étape cruciale pour assurer une installation
              réussie.
            </Card.Text>
            <Link to="/" className="d-flex justify-content-between">
              <span>Remplir le formulaire</span>
              <ArrowRight />
            </Link>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image src="./images/track-svgrepo-com 1.jpg" width={83} />
            <Card.Title>Suivis de votre demande</Card.Title>
            <Card.Text>
              Pour amorcer la procédure, il est d'une importance primordiale de
              remplir soigneusement le formulaire de demande d'installation. Ce
              formulaire ne réclame que 2 minutes de votre précieux temps, mais
              il constitue une étape cruciale pour assurer une installation
              réussie.
            </Card.Text>
            <Link to="/" className="d-flex justify-content-between">
              <span>Remplir le formulaire</span>
              <ArrowRight />
            </Link>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image src="./images/install-svgrepo-com 1.jpg" width={83} />
            <Card.Title>Installation de la fibre</Card.Title>
            <Card.Text>
              Pour amorcer la procédure, il est d'une importance primordiale de
              remplir soigneusement le formulaire de demande d'installation. Ce
              formulaire ne réclame que 2 minutes de votre précieux temps, mais
              il constitue une étape cruciale pour assurer une installation
              réussie.
            </Card.Text>
            <Link to="/" className="d-flex justify-content-between">
              <span>Remplir le formulaire</span>
              <ArrowRight />
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default MoreContent;
