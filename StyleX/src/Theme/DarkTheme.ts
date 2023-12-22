import stylex from "@stylexjs/stylex";
import { colors } from "./Tokens.stylex";

export const darkTheme = stylex.createTheme(colors, {
  primaryText: "white",
  secondaryText: "#4c8c59",
  secondaryTextHover: "white",
  secondaryTextActive: "white",
  secondaryTextDisabled: "#C8C5D1",
  backgroundPrimary: "#4c8c59",
  backgroundPrimaryHover: "#5ead6e",
  backgroundPrimaryActive: "#3a6b44",
  backgroundPrimaryDisabled: "#C8C5D1",
  backgroundSecondary: "white",
  backgroundSecondaryHover: "#5ead6e",
  backgroundSecondaryActive: "#3a6b44",
  backgroundSecondaryDisabled: "#C8C5D1",
});
