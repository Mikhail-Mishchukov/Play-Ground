import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { useState } from "react";
import { colors } from "../Theme/Tokens.stylex";
import { useTheme } from "../Context/ThemeContext";

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
    color: colors.primaryText,
    backgroundColor: colors.backgroundPrimary,
    ":hover": {
      backgroundColor: colors.backgroundPrimaryHover,
      borderColor: "#B89EFF",
    },
    ":active": {
      backgroundColor: colors.backgroundPrimaryActive,
      borderColor: "#8052FF",
    },
    ":disabled": {
      backgroundColor: colors.backgroundPrimaryDisabled,
      borderColor: "#C8C5D1",
      animationName: null,
      ":hover": {
        backgroundColor: colors.backgroundPrimaryDisabled,
        borderColor: "#C8C5D1",
      },
      ":active": {
        backgroundColor: colors.backgroundPrimaryDisabled,
        borderColor: "#C8C5D1",
      },
    },
  },
  secondary: {
    color: colors.secondaryText,
    backgroundColor: colors.backgroundSecondary,

    ":hover": {
      color: colors.secondaryTextHover,
      backgroundColor: colors.backgroundSecondaryHover,
    },
    ":active": {
      color: colors.secondaryTextActive,
      backgroundColor: colors.backgroundSecondaryActive,
    },
    ":disabled": {
      color: colors.secondaryTextDisabled,
      backgroundColor: colors.backgroundSecondaryDisabled,
      borderColor: "#C8C5D1",
      ":hover": {
        color: colors.secondaryTextDisabled,
        backgroundColor: colors.backgroundSecondaryDisabled,
        borderColor: "#C8C5D1",
      },
      ":active": {
        color: colors.secondaryTextDisabled,
        backgroundColor: colors.backgroundSecondaryDisabled,
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

  const { theme } = useTheme();
  return (
    <>
      <button
        disabled={isButtonDisabled}
        {...stylex.props(
          theme,
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
