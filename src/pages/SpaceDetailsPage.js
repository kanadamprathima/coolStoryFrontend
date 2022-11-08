import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpaceById } from "../store/spaces/thunks";
import {
  selectSpaceDetails,
  selectSpaceStories,
} from "../store/spaces/selectors";
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
    <div>
      <h2>space detailspage</h2>
      {/* dont forget to conditional render in detailspage like {spaceDetails?.title} orelse we can just wrapit in a div and put "title" inside map*/}

      <h3>{spaceDetails?.title}</h3>
      {!spaceDetails ? (
        <p>Loading...</p>
      ) : (
        spaceDetails.stories.map((p, i) => {
          return (
            <div>
              <div className="card"></div>
              <div
                className="container"
                key={i}
                style={{
                  color: `${spaceDetails.color}`,
                  backgroundColor: `${spaceDetails.backgroundColor}`,
                }}
              >
                <Story
                  name={p.name}
                  content={p.content}
                  imageUrl={p.imageUrl}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default SpaceDetailsPage;
