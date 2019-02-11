import { useState } from "react";

const useHandleInput = initialValue => {
  const [input, setInput] = useState(initialValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setInput(value);
  };

  return [input, onChange];
};

export default useHandleInput;
