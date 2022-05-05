import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

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

const DraggableColorBox = SortableElement((props) => {
  return (
    <div className={props.classes.root} style={{ background: props.color }}>
      <div className={props.classes.boxContent}>
        <span> {props.name}</span>
        <DeleteIcon
          className={props.classes.deleteIcon}
          onClick={props.handleClick}
        />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);
