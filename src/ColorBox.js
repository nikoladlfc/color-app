import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

import "./ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const { name, background, paletteId, colorId, showLink } = this.props;
    const copied = this.state.copied;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          ></div>
          <div className={`overlay-msg ${copied && "show"}`}>
            <h1 className={isLightColor ? "dark-text" : ""}>COPIED!</h1>
            <span className={isLightColor ? "dark-text" : ""}>
              {background}
            </span>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? "light-text" : ""}>{name}</span>
            </div>
            <button
              className={`copy-button ${isLightColor ? "dark-text" : ""}`}
            >
              COPY
            </button>
          </div>

          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor ? "dark-text" : ""}`}>
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
