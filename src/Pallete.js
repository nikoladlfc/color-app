import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallete.css";

export default class extends Component {
  render() {
    const colors = this.props.colors.map((clr) => (
      <ColorBox background={clr.color} name={clr.name} key={clr.color} />
    ));

    return (
      <div className="Pallete">
        {/* navigation */}

        {/* Pallete Colors */}
        <div className="Pallete-colors">{colors}</div>

        {/* footer */}
      </div>
    );
  }
}
