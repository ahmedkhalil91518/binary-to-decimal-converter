import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function BinaryInput(props: any) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.target;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    props.callback(event);
  };

  return (
    <Form noValidate validated={validated}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Binary Number"
            pattern="^[0-1]*$"
            onChange={handleSubmit}
          />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default BinaryInput;
