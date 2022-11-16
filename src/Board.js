import Dice from "./Dice";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function Board({name, color}) {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    gameHistory.push(nextNum); //gameHistory가 배열이니까 push메소드로 nextNum 추가
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
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>기록</p>
        <p>{gameHistory.join(',')}</p> 
      </div>
    </>
  );
}

export default Board;