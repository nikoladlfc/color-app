import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Pallete.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    //console.log(level);
    this.setState({ level });
  }

  render() {
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[level].map((clr) => (
      <ColorBox background={clr.hex} name={clr.name} key={clr.color} />
    ));

    return (
      <div className="Pallete">
        {/* navigation */}
        <Slider
          className="slider"
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* Pallete Colors */}
        <div className="Pallete-colors">{colorBoxes}</div>

        {/* footer */}
      </div>
    );
  }
}
