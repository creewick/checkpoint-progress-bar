import { useState } from 'react';

export default function useInput(defaultValue) {
  const [get, set] = useState(defaultValue);
  const input = {
    onChange: (e) => set(e.target.value),
    value: get,
  };

  return [get, input, set];
}