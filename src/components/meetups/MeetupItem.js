import React, { useContext } from 'react';
import classes from "./MeetupItem.module.css";
import { Favorite } from '../../context/FavoriteContext';
import Card from "../ui/Card";

export default function MeetupItem({meetUp}) {
  const { toggleFav, isItFav } = useContext(Favorite);

  return (
        <li className={classes.item} data-test='meet-up-item'>
          <Card>
            <div className={classes.image}>
              <img src={meetUp.image} alt={meetUp.title} />
            </div>
              <div className={classes.content}>
                <h3>{meetUp.title}</h3>
                <address>{meetUp.address}</address>
                <p>{meetUp.description}</p>
              </div>
              <div className={classes.actions}>
              <button onClick={() => toggleFav(meetUp)}>
                {isItFav(meetUp) ? 'Remove from favorites' :'Add to favorites'}
              </button>
            </div>
          </Card>
        </li>
  );
}
