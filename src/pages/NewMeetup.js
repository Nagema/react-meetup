import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React, { useState }  from 'react';

export default function NewMeetupsPage() {

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

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm 
        title={title}
        image={image}
        address={address}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeImage={onChangeImage}
        onChangeAddress={onChangeAddress}
        onChangeDescription={onChangeDescription}
      />
    </section>
  );
}
