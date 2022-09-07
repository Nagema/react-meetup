import React, { useContext, useState } from 'react';
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { Meetups } from '../../context/MeetupsContext';

export default function NewMeetupForm() {

  const { 
    meetups,
    addMeetup 
  } = useContext(Meetups);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = event => {
    setTitle(event.target.value);
  };
  const onChangeImage = event => {
    setImage(event.target.value);
  };
  const onChangeAddress = event => {
    setAddress(event.target.value);
  };
  const onChangeDescription = event => {
    setDescription(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    addMeetup({
      id: meetups.length + 1,
      title,
      image,
      address,
      description
    });
    setTitle('');
    setImage('');
    setAddress('');
    setDescription('')
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" value={title} onChange={onChangeTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" value={image} onChange={onChangeImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" value={address} onChange={onChangeAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={onChangeDescription} required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
