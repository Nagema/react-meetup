import React, { useContext } from 'react';
import MeetupItem from "../components/meetups/MeetupItem";
import { Meetups } from '../context/MeetupsContext';
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {

  const { favs } = useContext(Meetups);

  return (
    <section>
      <h1>{favs.length > 0 ? "Favorites Page" : "You don't have favorites yet"}</h1>

      <ul className={classes.list}>
      {
        favs.map(fav =>(
          <MeetupItem meetUp={fav} key={fav.id}/>
        ))
      }
      </ul>
    </section>
  );
}
