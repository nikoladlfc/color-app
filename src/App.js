import { Component } from "react";
import seedColors from "./seedColors.js";
import Palette from "./Palette.js";
import { generatePalette } from "./colorHelpers.js";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette.js";
import NewPaletteForm from "./NewPaletteForm";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.savePalette = this.savePalette.bind(this);
  }

  getColor(id) {
    return this.state.palettes.find((clr) => {
      return clr.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={(roundProps) => (
              <NewPaletteForm
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...roundProps}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={this.state.palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.getColor(routeProps.match.params.id)
                )}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorPalette
                palette={generatePalette(
                  this.getColor(routeProps.match.params.paletteId)
                )}
                colorId={routeProps.match.params.colorId}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
