import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

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
    const { name, background, paletteId, colorId } = this.props;
    const copied = this.state.copied;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          ></div>
          <div className={`overlay-msg ${copied && "show"}`}>
            <h1>COPIED!</h1>
            <span>{background}</span>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">COPY</button>
          </div>
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">MORE</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}
