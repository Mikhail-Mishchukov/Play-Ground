import { useState } from "react";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
  },
  buttonReset: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  button: {
    padding: "12px 16px",
    borderRadius: 4,
    background: {
      default: "#00D1B2",
      ":hover": "#00B89C",
      ":focus": "#00D1B2",
      ":active": "#00D1B2",
    },
    border: "1px solid #00D1B2",
    borderColor: {
      default: "#00D1B2",
      ":focus": "#D3FFF8",
    },
    color: "white",
  },
  highlighted: {
    color: "rebeccapurple",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div {...stylex.props(styles.container)}>
      <div>{count}</div>
      <button
        {...stylex.props(styles.buttonReset, styles.button)}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
//https://stylexjs.com/docs/learn/styling-ui/using-styles/
