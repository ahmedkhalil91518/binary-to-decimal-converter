import React, { ChangeEventHandler, FC } from "react";
import { Form } from "react-bootstrap";

interface Props {
    callback: ChangeEventHandler<any> | undefined,
    value: string
}

const BinaryInput: FC<Props> = ({callback, value }) => {
  return (
    <Form.Control
      size="lg"
      type="text"
      placeholder="Enter your binary number here"
      onChange={callback}
      value={value}
    />
  );
}

export default BinaryInput;
