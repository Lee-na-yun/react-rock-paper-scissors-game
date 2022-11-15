import "./App.css";
import HandIcon from "./HandIcon";
import Dice from "./Dice";
import HandButton from "./HandButton";
import Button from "./Button";

function App() {
  //const handleClick = (value) => console.log(value);
  return (
    <>
      {/* <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} /> */}
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={2}></Dice>
    </>
  );
}

export default App;
