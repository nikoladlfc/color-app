import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    margin: "0 auto",
    height: "23%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.7px",
  },
};

function DraggableColorBox(props) {
  return (
    <div className={props.classes.root} style={{ background: props.color }}>
      {props.name}
    </div>
  );
}
export default withStyles(styles)(DraggableColorBox);