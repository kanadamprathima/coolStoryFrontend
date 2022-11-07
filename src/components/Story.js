const Story = (props) => {
  return (
    <div>
      <div className="container-story">
        <h2>{props.name}</h2>
        <p>{props.content}</p>
        <img
          style={{
            width: 300,
            height: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          src={props.imageUrl}
          alt={props.name}
        />
        <br />
      </div>
    </div>
  );
};
export default Story;
