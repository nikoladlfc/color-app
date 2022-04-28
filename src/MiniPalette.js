import React, { Component } from "react";

import "./MiniPalette.css";

export default class MiniPalette extends Component {
  render() {
    const { paletteName, emoji, colors } = this.props.palettes;

    return (
      <div className="MiniPalette" onClick={this.props.handleClick}>
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
