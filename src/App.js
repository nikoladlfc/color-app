import "./App.css";
import seedColors from "./seedColors.js";
import Pallete from "./Pallete.js";
import { generatePalette } from "./colorHelpers.js";

function App() {
  console.log(generatePalette(seedColors[1]));
  return (
    <div className="App">
      <Pallete {...seedColors[6]} />
    </div>
  );
}

export default App;
