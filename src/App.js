import "./App.css";
import seedColors from "./seedColors.js";
import Palette from "./Palette.js";
import { generatePalette } from "./colorHelpers.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" render={() => <h1>Palette List</h1>} />
        <Route path="/palette/:id" render={() => <h1>INDIVIDUAL</h1>} />
      </Switch>
      {/* <Palette palette={generatePalette(seedColors[1])} /> */}
    </div>
  );
}

export default App;
