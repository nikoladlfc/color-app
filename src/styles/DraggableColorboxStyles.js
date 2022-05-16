const styles = {
  root: {
    width: "20%",
    margin: "0 auto",
    height: "23%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.7px",

    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)",
    },
  },

  boxContent: {
    position: "absolute",
    padding: "5px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: "rgba(0,0,0,0.5)",
    textTransform: "uppercase",
    fontSize: "0.7rem",
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between",
  },

  deleteIcon: {
    transition: "all .3s ease-in-out ",
  },
};

export default styles;
