import { Button, Card } from "react-bootstrap";

const BreadCrumbs = () => {
  return (
    <div>
      <p>
        Bienvenue, <b>Folefack</b>
      </p>
      <Button variant="primary">Ajouter un utilisateur</Button>
      <Button>Exporter le rapport</Button>
    </div>
  );
};
const DisplayContent = () => {
  return (
    <div>
      <Card></Card>
    </div>
  );
};

const DisplayPane = () => {
  return (
    <div>
      <BreadCrumbs />
      <DisplayContent />
    </div>
  );
};
export default DisplayPane;
