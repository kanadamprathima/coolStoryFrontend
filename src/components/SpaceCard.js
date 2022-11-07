import { NavLink } from "react-router-dom";
const SpaceCard = ({ id, title, des, backgroundColor, color }) => {
  return (
    <div
      className="container"
      style={{
        marginTop: 2 + "rem",
      }}
    >
      <div
        className="card  "
        style={{
          border: "2px solid black",
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <h2>{title}</h2>
        <p>{des}</p>

        <NavLink to={`/spaces/${id}`}>
          <button className="btn btn-primary">Visit Space</button>
        </NavLink>
      </div>
    </div>
  );
};
export default SpaceCard;
