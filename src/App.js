import "./App.css";
import seedColors from "./seedColors.js";
import Pallete from "./Pallete.js";

console.log(seedColors);
function App() {
  return (
    <div className="App">
      <Pallete {...seedColors[0]} />
    </div>
  );
}

export default App;
