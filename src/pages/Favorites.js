import React, { useContext } from 'react';
import MeetupItem from "../components/meetups/MeetupItem";
import { Favorite } from '../context/FavoriteContext';
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {

  const { favs } = useContext(Favorite);
  return (
    <section>
      <h1>Favorites Page</h1>

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
