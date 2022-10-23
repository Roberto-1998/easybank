import { useState } from 'react';

const useToggle = () => {
  const [toggle, settoggle] = useState(false);

  const handleToggle = () => {
    settoggle(!toggle);
  };

  return {
    toggle,
    handleToggle,
  };
};

export default useToggle;
