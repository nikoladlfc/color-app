import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./MiniPalette.css";

export default class MiniPalette extends Component {
  deletePalette = (e) => {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  };
  render() {
    const { paletteName, emoji, colors } = this.props.palettes;

    return (
      <div className="MiniPalette" onClick={this.props.handleClick}>
        <DeleteIcon
          className="DeleteIcon"
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deletePalette}
        />
        <div className="MiniPalette-colors">
          {colors.map((clr, i) => {
            return <div style={{ background: clr.color }} key={i}></div>;
          })}
        </div>
        <h5>
          {paletteName} <span>{emoji}</span>
        </h5>
      </div>
    );
  }
}
