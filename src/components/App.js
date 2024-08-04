import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Determine class based on the current mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={appClass === 'App dark' ? toggleDarkMode : toggleDarkMode}>{appClass === 'App dark' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</button>
        {/* add a small tag with the text 'Change to Light Mode' or 'Change to Dark Mode' depending on the current mode */}
         {/* <small style={{color: appClass === 'App dark' ? 'white' : 'black', background: appClass === 'App dark' ? 'red' : 'yellow', padding: '0.5rem'}}>{appClass === 'App dark' ? 'Change to Light Mode' : 'Change to Dark Mode'}</small> */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
