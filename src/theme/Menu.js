import { mode } from "@chakra-ui/theme-tools";

const Menu = {
  baseStyle: (props) => ({
    list: {
      bgColor: mode("white", "#98FF98")(props),
    },
    item: {
      bgColor: mode("white", "#98FF98")(props),
      _hover: {
        bgColor: mode("gray.200", "#98FF98")(props),
      },
    },
  }),
};

export default Menu;
