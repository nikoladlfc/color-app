import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Pallete.css";

export default class extends Component {
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
    const colors = this.props.palette.colors;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((clr) => (
      <ColorBox background={clr[format]} name={clr.name} key={clr.color} />
    ));

    return (
      <div className="Pallete">
        {/* navigation */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* Pallete Colors */}
        <div className="Pallete-colors">{colorBoxes}</div>

        {/* footer */}
      </div>
    );
  }
}
