import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel } = this.props;
    const format = this.state.format;

    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>

        {this.props.showSlider && (
          <div>
            {" "}
            <span>Level {level}</span>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>{" "}
          </div>
        )}

        <div className="select-container">
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">Hex</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3500}
          message={
            <span id="message-id">
              Format changed to {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
            >
              <CloseIcon></CloseIcon>
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
