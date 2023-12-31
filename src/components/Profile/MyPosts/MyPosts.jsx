import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return <div>
    My Posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, how are you?' like='Like counts 15' />
      <Post message="It's my first post" like='Like counts 20' />
    </div>
  </div>
}

export default MyPosts;

// модуляция стилей Profile