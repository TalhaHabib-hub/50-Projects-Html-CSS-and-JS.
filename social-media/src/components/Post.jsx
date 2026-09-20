import { redirect } from "react-router-dom";
import styles from "./Post.module.css";
import { Form } from "react-router-dom";

const Poster = () => {
  return (
    /*Submiting data usig action
    1. Action method can be used to perform an action on submission
    fo Forms
    2. Custom Form component need to be used along with name attribute for all inputs
    3.Action function will get an data object. To generate correct request object method='post'  attribute should be used
    */
    <Form method="POST" className={`${styles.postForm}`}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Content
        </label>
        <textarea
          name="body"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Likes
        </label>
        <input
          name="reactions"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Comments
        </label>
        <input
          name="views"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Shares
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          add tags with spaces
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

//this below is an action function it gets defautl data attribute as far as we write method='POST'
export async function createPostActionTalha(data) {
  const formData = await data.request.formData(); // this will give us data of all the form
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  // Talha look for this below one it is giving a maded object
  console.log(postData,'postData,data-formData-postData')

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( postData ),
      // JSON.stringify({// Talha from the console i see the postdata has this same arrangmeent automatically
      // title: postData.title,
      // userId: postData.userId,
      // reactions: postData.reactions,
      // body: postData.body,
      // views: postData.views,
      // tags: postData.tags,
    // }),
  })
    .then((res) => res.json())
    .then((objcame) => {
      console.log(objcame,'objcame');
    });

  return redirect("/");
}

export default Poster;
