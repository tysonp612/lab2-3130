import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Tracker() {
  const location = useLocation();

  useEffect(() => {
    console.log("Navigated to", location.pathname);
    // Perform additional actions on route change
  }, [location]);

  return null;  // This component doesn't render anything
}

export default Tracker;
