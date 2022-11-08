// const Story = (props) => {
//   return (
//     <div>
//       <div className="container-story">
//         <p>Spacedetails page</p>
//         <div>
//           <img
//             style={{
//               width: 300,
//               height: 300,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//             src={props.imageUrl}
//             alt={props.name}
//           />
//           <br />
//         </div>
//         <div>
//           <h2>{props.name} </h2>
//           <p>{props.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Story;

import Carousel from "react-bootstrap/Carousel";

function Story(props) {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={props.imageUrl}
          alt="First slide"
          style={{ width: 300 }}
        />
        <Carousel.Caption>
          <h3>{props.name}</h3>
          <p>{props.content}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Story;
