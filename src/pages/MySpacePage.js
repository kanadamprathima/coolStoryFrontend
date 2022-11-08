import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import EditSpaceForm from "../components/EditSpaceForm";
import PostStory from "../components/PostStory";
import { selectMySpace } from "../store/user/selectors";
import Story from "../components/Story";
import { deleteStory } from "../store/user/thunks";

const MySpacePage = () => {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMySpace);
  console.log("myspace from user to myspacepage", mySpace);
  const [showEditSpace, setShowEditSpace] = useState(false);
  const [showPostNewStory, setShowPostNewStory] = useState(false);
  const onDelete = (id) => {
    dispatch(deleteStory(id));
  };
  if (!mySpace) return <div>Loading..</div>;
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: mySpace.backgroundColor,
          color: mySpace.color,
        }}
        className="container-myspace"
      >
        <h2>My space page</h2>
        My Space:<h1>{mySpace.title}</h1>
        <p>{mySpace.description}</p>
        <span>
          <button
            className="btn btn-primary"
            onClick={() => setShowEditSpace(!showEditSpace)}
          >
            {showEditSpace ? "Close" : "EDIT MY SPACE!"}
          </button>
          {"  "}
          <button
            className="btn btn-primary"
            onClick={() => setShowPostNewStory(!showPostNewStory)}
          >
            {showPostNewStory ? "close" : "post new story"}
          </button>
        </span>
        {showEditSpace && <EditSpaceForm />}
        {showPostNewStory && <PostStory />}
        {mySpace.stories.map((p, i) => {
          return (
            <div key={i}>
              <Story
                id={p.id}
                name={p.name}
                content={p.content}
                imageUrl={p.imageUrl}
              />
              <button
                className="btn btn-primary"
                onClick={() => {
                  onDelete(p.id);
                }}
              >
                Delete a story
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MySpacePage;
