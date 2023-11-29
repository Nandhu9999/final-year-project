import React, { useState, useEffect } from 'react';

const Appp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check initial window width

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <div className="mobile-view">
          {/* Render content for mobile view */}
          <button onClick={() => setIsMobile(false)}>Show Sidebar</button>
        </div>
      ) : (
        <div className="desktop-view">
          {/* Render content for desktop view */}
          <aside className="sidebar">
            {/* Sidebar content */}
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </aside>
          <main className="main-content">
            {/* Main content */}
            <h1>Main Content</h1>
            <p>This is the main content area.</p>
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
