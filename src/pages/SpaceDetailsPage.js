import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpaceById } from "../store/spaces/thunks";
import { selectSpaceDetails } from "../store/spaces/selectors";
import Story from "../components/Story";

const SpaceDetailsPage = () => {
  const dispatch = useDispatch();
  const spaceDetails = useSelector(selectSpaceDetails);
  console.log("space details list from selector", spaceDetails);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);
  // const sortedStories = [...spaceDetails.stories].sort(
  //   (storyA, storyB) => new Date(storyA.createdAt) - new Date(storyB.createdAt)
  // );

  return (
    <div
      style={{
        backgroundColor: spaceDetails.backgroundColor,
        color: spaceDetails.color,
        width: "50%",
      }}
    >
      {spaceDetails.stories.map((story, index) => {
        return (
          <div key={index}>
            <Story
              name={story.name}
              content={story.content}
              imageUrl={story.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SpaceDetailsPage;
