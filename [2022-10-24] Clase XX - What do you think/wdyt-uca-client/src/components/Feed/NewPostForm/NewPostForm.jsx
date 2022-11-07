import classes from './NewPostForm.module.scss';

import Button from '../../Button/Button';

const NewPostForm = ({ onAddPost = () => { } }) => {

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    console.log({
      title: data.get("title"),
      description: data.get("description"),
      image: data.get("image")
    });

    //Añadir el post a la lista
    onAddPost(data.get("title"), data.get("description"), data.get("image"));
  }

  return (
    <section className={classes["post-form-section"]}>
      <h3> Tell us what's happening </h3>

      <form onSubmit={onSubmitHandler}>
        <label>
          What are you thinking? *
          <input name="title" required />
        </label>

        <label>
          Let's describe it *
          <textarea name="description" rows={5} required />
        </label>

        <label>
          Show us a picture
          <input name="image" type="url" />
        </label>

        <Button type='submit'>
          Add Post
        </Button>
      </form>
    </section>
  );
}

export default NewPostForm;