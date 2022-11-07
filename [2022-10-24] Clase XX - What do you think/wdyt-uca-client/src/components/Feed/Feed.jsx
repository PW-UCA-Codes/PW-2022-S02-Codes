import { useState, useEffect } from 'react';

import classes from './Feed.module.scss';
import NewPostForm from './NewPostForm/NewPostForm';
import Posts from './Posts/Posts';

import { toast } from 'react-toastify';

const dummyData = [
  {
    "_id": "635ff374a78561f4a28fe2fd",
    "title": "Post #1",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1201/900",
    "hidden": false,
    "createdAt": "2022-10-31T16:10:28.674Z",
    "updatedAt": "2022-10-31T16:10:28.674Z",
    "__v": 0
  },
  {
    "_id": "635ff37aa78561f4a28fe2ff",
    "title": "Post #2",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/904",
    "hidden": false,
    "createdAt": "2022-10-31T16:10:34.251Z",
    "updatedAt": "2022-10-31T16:10:34.251Z",
    "__v": 0
  },
  {
    "_id": "635ff397a78561f4a28fe301",
    "title": "Post #3",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/901",
    "hidden": false,
    "createdAt": "2022-10-31T16:11:03.143Z",
    "updatedAt": "2022-10-31T16:11:03.143Z",
    "__v": 0
  },
  {
    "_id": "635ff3e5a78561f4a28fe303",
    "title": "Post #4",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1203/900",
    "hidden": false,
    "createdAt": "2022-10-31T16:12:21.508Z",
    "updatedAt": "2022-10-31T16:12:21.508Z",
    "__v": 0
  },
  {
    "_id": "635ff3f0a78561f4a28fe305",
    "title": "Post #5",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/903",
    "hidden": false,
    "createdAt": "2022-10-31T16:12:32.296Z",
    "updatedAt": "2022-10-31T16:12:32.296Z",
    "__v": 0
  },
  {
    "_id": "636041433cd7ea8e23f0b75a",
    "title": "Post #6",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/905",
    "hidden": false,
    "createdAt": "2022-10-31T21:42:27.244Z",
    "updatedAt": "2022-10-31T21:42:27.244Z",
    "__v": 0
  }
]

const Feed = () => {
  //Hooks
  const [posts, setPosts] = useState([]);

  /* _aux[0] <- Estado <- posts
  _aux[1] <- Set function <- setPosts

  _aux[0] = ["dsad", 2 ] <- Nel
  _aux[1](["dsad", 2 ]); */

  useEffect(() => {
    fetchPosts()
  }, []);

  //Consultas a la API
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3500/api/post");

      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      }
    } catch (error) {
      toast.error("Unexpected Error!");
    }
  }

  const savePost = async (title, description, image) => {
    try {
      const response = await fetch("http://localhost:3500/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description, image })
      });

      if (response.ok) {
        toast.success("Post saved!");
      } else {
        const code = response.status.toString();
        const msg = {
          "400": "Wrong Fields",
          "404": "Not Found"
        }

        toast.warn(msg[code] || "Unexpected user error");
      }

    } catch (error) {
      toast.error("Unexpected Error!");
    }
  }

  //Herramientas de eventos
  const onAddPostHandler = async (title, description, image) => {
    //Manipular la lista
    //console.log("Creando el post", title, description, image);

    /* const _posts = [...posts, { _id: new Date().getTime().toString(), title, description, image }];
    setPosts(_posts); */

    await savePost(title, description, image);
    fetchPosts();
  }

  return (
    <div className={classes["feed-wrapper"]}>
      {/* FORMULARIO */}
      <NewPostForm onAddPost={onAddPostHandler} />

      {/* POSTS */}
      <Posts posts={posts} />
    </div>
  );
}

export default Feed;