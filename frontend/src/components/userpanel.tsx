import { ButtonGroup, Col, DropdownButton, Dropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const UserNotification = () => {
  return <i className="bi bi-bell"></i>;
};
const ProfileMenu = () => {
  return (
    <Dropdown as={ButtonGroup} title="Folefack Julie">
      <Dropdown.Item eventKey="1">View Cart</Dropdown.Item>
      <Dropdown.Item eventKey="2">LogOut</Dropdown.Item>
    </Dropdown>
  );
};
const ProfileStatus = () => {
  return <p style={{ color: "green" }}>Online</p>;
};

const UserPanel = () => {
  return (
    <div>
      <Col>
        <UserNotification />
      </Col>
      <Col>
        <Image src="logo.svg" roundedCircle />
      </Col>
      <Col>
        <ProfileMenu />
        <ProfileStatus />
      </Col>
    </div>
  );
};
export default UserPanel;
