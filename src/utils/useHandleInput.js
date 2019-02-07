import { useState } from "react";

const useHandleInput = initialValue => {
  const [input, setInput] = useState(initialValue);

  return [input, setInput];
};

export default useHandleInput;
