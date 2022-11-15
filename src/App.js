import "./App.css";
import HandIcon from "./HandIcon";
import Dice from "./Dice";
import HandButton from "./HandButton";
import Button from "./Button";
import { useState } from "react";
import { generateRandomHand, compareHand } from "./utils";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]); // set함수로 새 값이 추가된 gameHistory state 전달하기
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>기록</p>
        <p>{gameHistory.join(",")}</p>
        {/* 1. 각 주사위 숫자값들을 쉼표(,)로 전달하고
            2. join메서드는 argument로 전달한 값을 배열의 각 요소들 사이사이에 넣어서 결과적으로 하나의 문자열로 만들어줌*/}
      </div>
    </>
  );
}

export default App;
