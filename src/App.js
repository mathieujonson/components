import React from "react";
import "./App.css";
import Waiter from "./components/Waiter/Waiter";

function App() {
  return (
    <div className="app">
      <header className="app-header">Components</header>
      <div className="content-container">
        <h3>Waiter</h3>
        <p>Simple loading graphic, with hard-coded color values.</p>
        <Waiter />
      </div>
    </div>
  );
}

export default App;
