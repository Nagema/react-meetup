import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({
  title,
  image,
  address,
  description,
  onChangeTitle,
  onChangeImage,
  onChangeAddress,
  onChangeDescription

}) {
  function submitHandler(event) {
    event.preventDefault();
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
