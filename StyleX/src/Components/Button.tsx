import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { useState } from "react";

const moving = stylex.keyframes({
  "0%": { transform: "translateX(-50%)" },
  "50%": { transform: "translateX(50%)" },
  "100%": { transform: "translateX(-50%)" },
});

const buttonStyles = stylex.create({
  buttonReset: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },

  button: {
    position: "relative",
    padding: "17px 35px",
    border: "1px solid  #9873FF",
    fontFamily: "'Open Sans'",
    fontSize: 20,
    fontWeight: 500,
    animationName: moving,
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    ":disabled": {
      animationPlayState: "paused",
    },
  },
  animationDurationClass: (animationDuration: number) => ({
    animationDuration: `${animationDuration}s`,
  }),
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
      animationName: null,
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

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  buttonClass?: StyleXStyles;
}

export function Button({ buttonClass }: ButtonProps) {
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("primary");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(2);
  return (
    <>
      <button
        disabled={isButtonDisabled}
        {...stylex.props(
          buttonStyles.buttonReset,
          buttonStyles.button,
          buttonStyles.animationDurationClass(animationDuration),
          buttonStyles[buttonVariant],
          buttonClass
        )}
        onClick={() => {
          if (buttonVariant === "primary") {
            setButtonVariant("secondary");
            return;
          }
          setButtonVariant("primary");
        }}
      >
        Change button {buttonVariant} (if you can)
      </button>
      <button onClick={() => setIsButtonDisabled((prev) => !prev)}>
        Disable button above
      </button>
      <button onClick={() => setAnimationDuration((prev) => prev + 1)}>
        Slow it down
      </button>
    </>
  );
}
