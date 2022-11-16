import Dice from "./Dice";

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  // reduce() : 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환함
  // array.reduce((acc,cur,index,element) => {return 결과}, 초기값);
  return (
    <>
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>기록</p>
        <p>{gameHistory.join(",")}</p>
      </div>
    </>
  );
}

export default Board;
