import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./SingleColorPalette.css";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }

  gatherShades(palette, colorToFilter) {
    let shades = [];
    const allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((clr) => {
          return clr.id === colorToFilter;
        })
      );
    }

    return shades.slice(1);
  }

  render() {
    const shades = this._shades.map((shd) => (
      <ColorBox
        key={shd.id}
        name={shd.name}
        background={shd.hex}
        showLink={false}
      ></ColorBox>
    ));
    console.log(shades);
    return (
      <div className="Palette">
        {/* <Navbar /> */}
        <div className="Palette-colors">{shades}</div>
      </div>
    );
  }
}
