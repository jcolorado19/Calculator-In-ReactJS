import { useState } from 'react';

export const useInput = (initialState = '') => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
  };
};
