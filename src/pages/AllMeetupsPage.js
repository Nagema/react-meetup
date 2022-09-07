import MeetupItem from "../components/meetups/MeetupItem";
import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {

  const { meetUps } = useFetch({
    url: "/data.json",
  });

  if (!meetUps) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
      {
        meetUps.map(meetUp =>(
          <MeetupItem meetUp={meetUp} key={meetUp.id}/>
        ))
      }
      </ul>
    </section>
  );
}
