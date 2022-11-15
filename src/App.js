import "./App.css";
import HandIcon from "./HandIcon";
import Dice from "./Dice";
import HandButton from "./HandButton";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  //const handleClick = (value) => console.log(value);
  //const handleClearClick = () => console.log("처음부터");

  const [num, setNum] = useState(1);
  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  };

  return (
    <>
      {/* <Button onClick={handleClearClick}>처음부터</Button>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} /> */}

      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </>
  );
}

export default App;
