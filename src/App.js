import "./App.css";
import seedColors from "./seedColors.js";
import Pallete from "./Pallete.js";
import { generatePalette } from "./colorHelpers.js";

function App() {
  return (
    <div className="App">
      <Pallete palette={generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
