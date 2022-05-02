import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

import "./SingleColorPalette.css";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const format = this.state.format;
    const shades = this._shades.map((shd, i) => (
      <ColorBox
        key={i}
        name={shd.name}
        background={shd[format]}
        showLink={false}
      ></ColorBox>
    ));
    const palette = this.props.palette;

    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {shades}
          <div className="go-back ColorBox">
            <Link to={`/palette/${palette.id}`} className="back-button">
              GO BACK!
            </Link>{" "}
          </div>
        </div>{" "}
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}
