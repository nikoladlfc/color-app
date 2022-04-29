import React, { Component } from "react";
import MiniPalette from "./MiniPalette";

import "./PaletteList.css";

export default class PaletteList extends Component {
  handleClick(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        <div className="PaletteList-container">
          <nav className="PaletteList-nav">
            <h3>React Colors</h3>
          </nav>
          <div className="PaletteList-palettes">
            {palettes.map((plt) => (
              <MiniPalette
                palettes={plt}
                key={plt.id}
                handleClick={() => this.handleClick(plt.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
