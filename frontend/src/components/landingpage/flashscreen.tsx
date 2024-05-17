import { Card, Button, Image } from "react-bootstrap";

const FlashScreen = () => {
  return (
    <Card className="text-center" style={{ width: "80rem" }}>
      <Card.Body>
        <Card.Title>
          Plate-forme en ligne de Demande Internet <br /> au Bureaux ou Maison
        </Card.Title>
        <Card.Text>Simple, Rapide, Suivez sans stress et Plus!</Card.Text>

        <Button variant="primary">Faites une demande</Button>
        <Button variant="link">tarification</Button>
      </Card.Body>
      <Image src="./flashscreen.jpg" rounded />
    </Card>
  );
};
export default FlashScreen;
