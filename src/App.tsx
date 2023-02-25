import Canvas from "./components/Canvas";
import Draggable from "./components/Draggable";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Draggable />
      </Canvas>
    </div>
  );
}

export default App;
