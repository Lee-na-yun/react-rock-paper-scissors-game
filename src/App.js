import "./App.css";
import HandIcon from "./HandIcon";
import Dice from "./Dice";
import HandButton from "./HandButton";
import Button from "./Button";

function App() {
  const handleClick = (value) => console.log(value);
  const handleClearClick = () => console.log("처음부터");
  return (
    <>
      <Button onClick={handleClearClick}>처음부터</Button>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />

      {/* <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={2}></Dice> */}
    </>
  );
}

export default App;
