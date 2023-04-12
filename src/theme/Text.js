import { mode } from "@chakra-ui/theme-tools";

const Text = {
  baseStyle: (props) => ({
    color: mode("#98FF98", "white")(props),
  }),
  variants: {
    link: (props) => ({
      color: mode("#98FF98", "#98FF98")(props),
      fontWeight: "bold",
      cursor: "pointer",
    }),
    subtle: (props) => ({
      color: "gray.500",
      fontSize: "9pt",
    }),
  },
};

export default Text;
