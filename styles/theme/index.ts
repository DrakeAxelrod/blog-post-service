import {
  extendTheme,
  ThemeConfig,
  withDefaultVariant,
  useStyleConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "@styles/colors.module.scss";
import fonts from "@styles/fonts.module.scss";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const overrides = {
  config,
  ...styles,
};

// const theme = extendTheme({
//   config,
//   colors: { ...colors },
//   fonts: {
//     body: "Open Sans",
//     heading: "Nunito",
//     p: "Open Sans",
//     span: "Open Sans",
//     div: "Open Sans",
//     a: "Nunito",
//   },
//   styles: {
//     global: (props) => ({
//       body: {
//         color: mode("dark_black", "nord_white_1")(props),
//         bg: mode("nord_white_1", "dark_black")(props),
//       },
//     }),
//   },
// });
export default extendTheme(overrides);
