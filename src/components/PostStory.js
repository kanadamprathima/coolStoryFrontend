import { useState } from "react";

const PostStory = () => {
  const [name, setName] = useState(" ");
  const [content, setContent] = useState(" ");
  const [url, setUrl] = useState(
    "https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg "
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("post stry details form", name, content);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>post story form</h2>
        <label>
          Name:
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          content:
          <input
            type="text"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <label>
          image url:
          <input
            type="text"
            placeholder="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        {url ? <img src={url} alt="preview" style={{ width: 300 }} /> : null}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default PostStory;
