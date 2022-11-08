import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMySpace } from "../store/user/selectors";
import { useDispatch } from "react-redux";
import { updateMySpace } from "../store/user/thunks";

const EditSpaceForm = () => {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMySpace);
  const [title, setTitle] = useState(mySpace.title);
  const [description, setDescription] = useState(mySpace.description);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMySpace(title, description, backgroundColor, color));
    setTitle("");
    setDescription("");

    console.log("from editform ", title, description);
  };

  return (
    <div>
      <h1>edit my space form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
        </p>
        <p>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
          />
        </p>
        <p>
          <label>
            <b>Choose a background color: </b>
          </label>
          <input
            style={{ width: "5rem" }}
            type="color"
            value={backgroundColor}
            onChange={(event) => setBackgroundColor(event.target.value)}
          />
        </p>
        <p>
          <label>
            <b>Choose a font color: </b>
          </label>
          <input
            style={{ width: "5rem" }}
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </p>
        <br />
        <button type="submit">Save changes!</button>
      </form>
    </div>
  );
};
export default EditSpaceForm;
