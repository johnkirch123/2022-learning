import React, { useState, useContext, createContext, memo } from 'react';
import './app.css';

const ToggleThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <ToggleThemeContext.Provider value={{ theme, setTheme }}>
      <DirectChild />
    </ToggleThemeContext.Provider>
  );
};

// Dont actually need memo now that I am bringing the theme into this component
const DirectChild = memo(() => {
  const { theme } = useContext(ToggleThemeContext);
  console.log('direct child');
  return (
    <div className={`app ${theme ? 'light' : 'dark'}`}>
      <DeeperChild />
    </div>
  );
});

const DeeperChild = () => {
  console.log('deeper child');
  const { theme, setTheme } = useContext(ToggleThemeContext);

  return (
    <div>
      <button className='button' onClick={() => setTheme(!theme)}>
        Theme
      </button>
    </div>
  );
};

export default App;
