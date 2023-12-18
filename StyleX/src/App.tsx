import { useState } from "react";
import stylex from "@stylexjs/stylex";

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

const buttonStyles = stylex.create({
  buttonReset: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  button: {
    padding: "17px 35px",
    border: "1px solid  #9873FF",
    fontFamily: "'Open Sans'",
    fontSize: 20,
    fontWeight: 500,
  },
  primary: {
    color: "white",
    backgroundColor: "#9873FF",
    ":hover": {
      backgroundColor: "#B89EFF",
      borderColor: "#B89EFF",
    },
    ":active": {
      backgroundColor: "#8052FF",
      borderColor: "#8052FF",
    },
    ":disabled": {
      backgroundColor: "#C8C5D1",
      borderColor: "#C8C5D1",
      ":hover": {
        backgroundColor: "#C8C5D1",
        borderColor: "#C8C5D1",
      },
      ":active": {
        backgroundColor: "#C8C5D1",
        borderColor: "#C8C5D1",
      },
    },
  },
  secondary: {
    color: "#9873FF",
    backgroundColor: "white",
    ":hover": {
      color: "white",
      backgroundColor: "#B89EFF",
    },
    ":active": {
      color: "white",
      backgroundColor: "#8052FF",
    },
    ":disabled": {
      color: "#C8C5D1",
      backgroundColor: "white",
      borderColor: "#C8C5D1",
      ":hover": {
        color: "#C8C5D1",
        backgroundColor: "white",
        borderColor: "#C8C5D1",
      },
      ":active": {
        color: "#C8C5D1",
        backgroundColor: "white",
        borderColor: "#C8C5D1",
      },
    },
  },
});

const inputStyles = stylex.create({
  resetInputStyles: {
    border: "unset",
    ":focus": {
      outline: "unset",
    },
  },
  baseStyles: {
    width: {
      default: 300,
      "@media (max-width: 1000px)": 200,
    },
    padding: "15px 20px",
    borderRadius: 6,
    "::placeholder": {
      color: "#1D2433",
    },
  },
});

type ButtonVariant = "primary" | "secondary";

function App() {
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("primary");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <div {...stylex.props(containerStyles.container)}>
      <button
        disabled={isButtonDisabled}
        {...stylex.props(
          buttonStyles.buttonReset,
          buttonStyles.button,
          buttonStyles[buttonVariant]
        )}
        onClick={() => {
          if (buttonVariant === "primary") {
            setButtonVariant("secondary");
            return;
          }
          setButtonVariant("primary");
        }}
      >
        Change button {buttonVariant}
      </button>
      <button onClick={() => setIsButtonDisabled((prev) => !prev)}>
        Disable button above
      </button>

      <input
        {...stylex.props(inputStyles.resetInputStyles, inputStyles.baseStyles)}
        placeholder="Placeholder"
      ></input>
    </div>
  );
}

export default App;
//https://stylexjs.com/docs/learn/styling-ui/using-styles/
