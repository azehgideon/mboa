import userEvent from "@testing-library/user-event";
import { Button, Card, Image } from "react-bootstrap";

const UserCardItem = (props: { user: any }) => {
  const { user } = props;
  return (
    <Card>
      <Image src={user.profilePic} roundedCircle />
      <h3>{user.names}</h3>
      <p>{user.function}</p>
      <Button>Reinitialiser le mot de passe</Button>
    </Card>
  );
};
export default UserCardItem;
