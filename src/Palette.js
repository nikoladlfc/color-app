import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import "./Palette.css";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((clr) => (
      <ColorBox
        background={clr[format]}
        name={clr.name}
        key={clr.id}
        paletteId={id}
        colorId={clr.id}
        showLink={true}
      />
    ));

    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showSlider={true}
        />

        <div className="Palette-colors">{colorBoxes}</div>

        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
