import stylex from "@stylexjs/stylex";
import { Button } from "./Components/Button";

const containerStyles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
});

const buttonStyle = stylex.create({
  button: {
    //It looks like it doesn't work properly with pseudo elements and class
    //It actually works, but the ts is raising an error
    [":before"]: {
      content: "External Style",
      position: "absolutely",
      top: -10,
      left: -10,
    },
  },
});

// const inputStyles = stylex.create({
//   resetInputStyles: {
//     border: "unset",
//     ":focus": {
//       outline: "unset",
//     },
//   },
//   baseStyles: {
//     width: {
//       default: 300,
//       "@media (max-width: 1000px)": 200,
//     },
//     padding: "15px 20px",
//     borderRadius: 6,
//     "::placeholder": {
//       color: "#1D2433",
//     },
//   },
// });

function App() {
  return (
    <div {...stylex.props(containerStyles.container)}>
      <Button buttonClass={buttonStyle.button} />
      {/* <input
        {...stylex.props(inputStyles.resetInputStyles, inputStyles.baseStyles)}
        placeholder="Placeholder"
      ></input> */}
    </div>
  );
}

export default App;
//https://stylexjs.com/docs/learn/styling-ui/using-styles/
