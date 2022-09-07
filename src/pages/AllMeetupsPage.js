import React, { useContext } from 'react';
import MeetupItem from "../components/meetups/MeetupItem";
import { Meetups } from '../context/MeetupsContext';
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { meetups } = useContext(Meetups);

  if (!meetups) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
      {
        meetups.map(meetUp =>(
          <MeetupItem meetUp={meetUp} key={meetUp.id}/>
        ))
      }
      </ul>
    </section>
  );
}
