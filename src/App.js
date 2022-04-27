import "./App.css";
import seedColors from "./seedColors.js";
import Palette from "./Palette.js";
import { generatePalette } from "./colorHelpers.js";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[1])} />
    </div>
  );
}

export default App;
