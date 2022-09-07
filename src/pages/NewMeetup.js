import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React, { useState }  from 'react';

export default function NewMeetupsPage() {

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}
