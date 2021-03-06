import { DRAWER_WIDTH } from "../constants";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    justifyContent: "space-between",
    flexDirection: "row",
    height: "64px",
    background: "white",
    color: "black",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },

  navBtns: {
    marginRight: "1rem",
  },

  button: {
    margin: "0 0.5rem",
  },
});

export default styles;
