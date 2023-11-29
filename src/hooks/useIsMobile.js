import { useState, useEffect } from 'react';

const useIsMobile = () => {
  // 768 pixels as threshold for mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;