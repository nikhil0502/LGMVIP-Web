import React from "react";
import "./style1.css";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://letsgrowmore.in/wp-content/uploads/2021/05/undraw_solution_mindset_34bi-min.png"
            alt="logo"
            width="80"
            height="70"
            className="img"
          />
        </a>
      </div>
    </nav>
  );
}
