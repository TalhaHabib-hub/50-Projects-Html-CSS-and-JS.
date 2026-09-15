import styles from './Post.module.css'
import { useRef } from 'react';
import { useContext } from 'react';
import { ContextTalha } from '../store/ContextTalha';


const Poster = () => {
  const {addPost,} = useContext(ContextTalha)

  
  const TitleElement = useRef("");
  const ContentElement = useRef("");
  const LikesElement = useRef("");
  const CommentsElement = useRef("");
  const SharesElement = useRef("");
  const tagsElement = useRef([]);

  const handleSubmit = (event) => {
        event.preventDefault(); 
        
     
    
        const title=TitleElement.current.value;
        const likes=LikesElement.current.value;
        const content= ContentElement.current.value;
        const comments =CommentsElement.current.value;
        const shares= SharesElement.current.value;
      const tags = tagsElement.current.value.split(/(\s+)/);
    
    
    addPost(title,likes,content,comments,shares,tags)
    console.log(title, likes, content, comments, shares, tags)
    
      TitleElement.current.value = ("");
       ContentElement.current.value = ("");
       LikesElement.current.value = ("");
       CommentsElement.current.value = ("");
       SharesElement.current.value = ("");
    tagsElement.current.value = "";
    
        
  }
  return (    
    <form className={`${styles.postForm}`}
      onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          ref={TitleElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Content
        </label>
        <textarea
          ref={ContentElement}
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Likes
        </label>
        <input
          ref={LikesElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Comments
        </label>
        <input
          ref={CommentsElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Shares
        </label>
        <input
          ref={SharesElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          add tags with spaces
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
</div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Poster;
