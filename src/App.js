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
  getColor(id) {
    return seedColors.find((clr) => {
      return clr.id === id;
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/palette/new" render={() => <NewPaletteForm />} />

          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={seedColors} {...routeProps} />
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
