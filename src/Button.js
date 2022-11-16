import './Button.css';

function Button({ children, onClick, color = 'blue'}) {
  const classNames = `Button ${color}`; // 클래스네임값이 바뀌게 하기
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
