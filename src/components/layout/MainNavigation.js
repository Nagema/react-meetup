import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Meetups } from '../../context/MeetupsContext';
import { useScrollDirection } from '../../util-hooks/useScrollDirection';
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {

  const { favItems } = useContext(Meetups);

  const scrollDirection = useScrollDirection();
  
  return (
    <div className={`${ scrollDirection === "down" ? classes.stickyHeaderDown : classes.stickyHeader}`}>
      <header className={classes.header} data-test="navigation-header">
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                All Meetups
              </Link> 
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge}>{favItems}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}