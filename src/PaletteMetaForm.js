import React, { Component, useEffect, useRef } from "react";
import { render } from "react-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

function EmojiPicker(props) {
  const ref = useRef();

  useEffect(() => {
    new Picker({ ...props, data, ref });
  }, []);

  return <div ref={ref} />;
}

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true, newPaletteName: "" };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  render() {
    return (
      <Dialog open={this.state.open} onClose={this.hideForm}>
        <ValidatorForm
          onSubmit={() => this.props.handleSubmit(this.state.newPaletteName)}
        >
          <DialogTitle>Choose a Palette Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your palette. Make sure it's unique.
            </DialogContentText>
            <TextValidator
              value={this.state.newPaletteName}
              name="newPaletteName"
              onChange={this.handleChange}
              validators={["required", "isPaletteNameUnique"]}
              fullWidth
              placeholder="Type name for your palette"
              margins="normal"
              errorMessages={[
                "Enter Palette Name",
                "Palette name must be unique",
              ]}
            />
            <EmojiPicker onEmojiSelect={console.log} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideForm}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>{" "}
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
