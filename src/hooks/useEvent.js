import { useState } from "react";

export function useChange() {
  const [value, setValue] = useState(null);

  const handleChange = (e) => setValue(e.target.value);
  const resetChange = (e) => setValue("");

  return [value, handleChange, resetChange];
}
