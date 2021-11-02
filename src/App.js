import { useState } from "react";
import { SketchPicker } from 'react-color';

function App() {
  const [color, setColor] = useState('#FFF');

  return (
    <div className="App">
      <div className="bg">
          <div className="bg-blend" style={{backgroundColor: color}}></div>
        </div>
        <SketchPicker color={color} onChangeComplete={(color)=> setColor(color.hex) } />
    </div>
  );
}

export default App;
