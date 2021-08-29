import React, { ChangeEventHandler, FC } from "react";
import { Form } from "react-bootstrap";

interface Props {
    callback: ChangeEventHandler<any> | undefined,
}

const BinaryInput: FC<Props> = ({callback }) => {
  return (
    <Form.Control
      size="lg"
      type="text"
      placeholder="Enter your binary number here"
      onChange={callback}
    />
  );
}

export default BinaryInput;
