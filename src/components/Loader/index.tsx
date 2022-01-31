import ReactLoading from "react-loading";

export const CustomLoader = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
);

export const InitialLoading = () => (
  <ReactLoading
    type={"spinningBubbles"}
    color={"black"}
    height={"20%"}
    width={"20%"}
  />
);

export default InitialLoading;

// export const Options = [
//     {
//       prop: "balls",
//       name: "Balls"
//     },
//     {
//       prop: "bars",
//       name: "Bars"
//     },
//     {
//       prop: "bubbles",
//       name: "Bubbles"
//     },
//     {
//       prop: "cubes",
//       name: "Cubes"
//     },
//     {
//       prop: "cylon",
//       name: "Cylon"
//     },
//     {
//       prop: "spin",
//       name: "Spin"
//     },
//     {
//       prop: "spinningBubbles",
//       name: "SpinningBubbles"
//     },
//     {
//       prop: "spokes",
//       name: "Spokes"
//     }
//   ];
