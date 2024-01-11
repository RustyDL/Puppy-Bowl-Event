// Import the React library, which allows us to define components
import React from 'react';

// Import the Players component, which we'll use to show a list of players
import Players from './Players'; // Adjust the import path based on your project structure

// Define the App component
function App() {
  return (
    // This component renders the Players component inside a div
    // This div has a class of 'App', which we could use for styling
    <div className="App">
      <h1>Player List</h1>
      <Players />
    </div>
  );
}

// Export the App component as the default export
export default App;