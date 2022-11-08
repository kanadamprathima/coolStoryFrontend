// import { Title } from "../styled";
// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { getSpaces } from "../store/spaces/thunks";
import SpaceCard from "../components/SpaceCard";
import { selectAllSpaces } from "../store/spaces/selectors";

export const Homepage = () => {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectAllSpaces);
  // console.log(" spaces selector ", allSpaces);

  useEffect(() => {
    dispatch(getSpaces());
  }, [dispatch]);
  return (
    <Container>
      <h3>Hello there 👋</h3>
      {!allSpaces ? (
        <p>Loading spaces...</p>
      ) : (
        allSpaces.map((p, i) => {
          return (
            <div key={i}>
              <SpaceCard
                id={p.id}
                title={p.title}
                des={p.description}
                backgroundColor={p.backgroundColor}
                color={p.color}
              />
            </div>
          );
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
