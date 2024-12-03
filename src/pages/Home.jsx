import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="header">
        <div className="container header_container">
          <ul className="list">
            <li>
              <NavLink href="#">1-masalaga otish</NavLink>
            </li>
            <li>
              <NavLink href="#">2-masalaga otish</NavLink>
            </li>
            <li>
              <NavLink href="#">3-masalaga o'tish</NavLink>
            </li>
            <li>
              <NavLink href="#">4-masalaga o'tish</NavLink>
            </li>
            <li>
              <NavLink href="#">5-masalaga o'tish</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
