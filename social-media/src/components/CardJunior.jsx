import style from "./CardJunior.module.css";
import { useContext } from "react";
import { ContextTalha } from "../store/ContextTalha";

const CardJunior = ({ each }) => {
  const { deletePost } = useContext(ContextTalha);
  return (
    
    <div
      className={`card ${style.cardBig}`}
      style={{ width: "22rem" }}
      key={each.userId}
    >
      <div className={`${style.mainKhan}`}>
        <div className="card-body">
          <h5 className="card-title">
            {each.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(each.userId)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </span>
          </h5>
          <p className={`card-text ${style.hold}`}>{each.body}</p>
        </div>
      </div>
      <div className="card-body">
        
        {each.tags.map((tag) => (
          <a href="#" className="card-link" key={tag}>
            #{tag}
          </a>
        ))}
      </div>

      
      <ul
        className={`list-group list-group-flush ${style.uli}`}
        style={{ display: "flex", flexDirection: "row" }}
        key={each.id}
      >
        <li className={`list-group-item ${style.listItem}`} key={1}>
          <box-icon name="like"></box-icon>
          {each.reactions.likes||356}
        </li>
        <li className={`list-group-item ${style.listItem} `} key={2}>
          {" "}
          <box-icon name="chat"></box-icon>
          {each.id}
        </li>
        <li className={`list-group-item ${style.listItem}`} key={3}>
          <box-icon name="share" flip="horizontal"></box-icon>
          {each.userId}
        </li>
      </ul>
    </div>
  );
};

export default CardJunior;
