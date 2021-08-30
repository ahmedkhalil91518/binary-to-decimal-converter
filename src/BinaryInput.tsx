import { useState } from "react";
import { Form } from "react-bootstrap";

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
    <Form noValidate validated={validated}  className="pt-5 pb-2">
        <Form.Group  controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Binary Number"
            pattern="^[0-1]*$"
            onChange={handleSubmit}
          />
        </Form.Group>
    </Form>
  );
}

export default BinaryInput;
