
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import { useState } from 'react';
import './App.css';

function App() {
  const [category,setcategory] = useState("general");
  const [isDarkTheme, setIsDarkTheme] = useState(false); 

    const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Navbar

        setcategory={setcategory}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <NewsBoard
        category = {category}
      />
    </div>
  );
}
export default App;