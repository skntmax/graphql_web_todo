import React from "react";

function Header() {
  return (
    <div>
      <nav class="nav justify-content-center">
        <a class="nav-link active" aria-current="page" href="#">
          Keep notes
        </a>
        <a class="nav-link" href="#">
          Home
        </a>
        <a class="nav-link" href="#">
          Services
        </a>
      </nav>
    </div>
  );
}

export default Header;
