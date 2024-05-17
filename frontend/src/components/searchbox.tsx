import Form from "react-bootstrap/Form";
const Searchbox = () => {
  return (
    <Form>
      <Form.Control
        style={{ fontSize: "14px" }}
        type="text"
        placeholder="<i></i>Faites une recherche"
      />
    </Form>
  );
};
export default Searchbox;
