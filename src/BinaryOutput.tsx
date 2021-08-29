import React, { FC } from "react";

interface Props {
  value: string
}


const BinaryOutput: FC<Props> = ({value}) => {
  return <div>{value}</div>;
};

export default BinaryOutput;
