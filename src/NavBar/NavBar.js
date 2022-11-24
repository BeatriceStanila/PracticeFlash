import React from "react";

function NavBar({ navClickHandler }) {
  return (
    <nav className="nav-bar">
      <button onClick={navClickHandler} value="Technical">
        Technical
      </button>
      <button onClick={navClickHandler} value="Behavioural">
        Behavioural
      </button>
      <button onClick={navClickHandler} value="Random">
        Random
      </button>
    </nav>
  );
}

export default NavBar;
