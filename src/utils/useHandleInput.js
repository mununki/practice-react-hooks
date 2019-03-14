import { useState } from "react";

const useHandleInput = initialValue => {
  const [value, setInput] = useState(initialValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setInput(value);
  };

  return { value, onChange };
};

export default useHandleInput;
