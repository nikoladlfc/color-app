import React, { Component, useEffect, useRef } from "react";
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
    this.state = { stage: "form", newPaletteName: "" };
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

  savePalette = (emoji) => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };

    this.props.handleSubmit(newPalette);
  };

  showEmojiPicker = () => {
    this.setState({ stage: "emoji" });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.stage === "emoji"}
          onClose={this.props.hideForm}
        >
          <DialogTitle>Choose a Palette Emoji</DialogTitle>
          <EmojiPicker onEmojiSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          onClose={this.props.hideForm}
        >
          <ValidatorForm onSubmit={this.showEmojiPicker}>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.hideForm}>Cancel</Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>{" "}
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
