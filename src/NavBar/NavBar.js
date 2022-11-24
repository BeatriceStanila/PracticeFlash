import React from "react";

function NavBar() {
  return (
    <nav className="nav-bar">
      <button>Technical</button>
      <button>Behavioural</button>
      <button>Random</button>
    </nav>
  );
}

export default NavBar;

// onClick={() => setFlip(!flip)}>
//         {flip ? <p>{answer}</p> : <p>Click here for answer</p>}
