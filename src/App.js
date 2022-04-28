import { Component } from "react";
import "./App.css";
import seedColors from "./seedColors.js";
import Palette from "./Palette.js";
import { generatePalette } from "./colorHelpers.js";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";

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
              />
            )}
          />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[1])} /> */}
      </div>
    );
  }
}

export default App;
