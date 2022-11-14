import "./App.css";
import HandIcon from "./HandIcon";
import Dice from "./Dice";

function App() {
  return (
    <>
      {/* <Dice color="red" num={2} /> */}
      <HandIcon value="rock"/>
      <HandIcon value="scissor"/>
      <HandIcon value="paper"/>
    </>
  );
}

export default App;
