import './Button.css';

function Button({ children, onClick, color = 'blue', className = ''}) {
  const classNames = `Button ${color} ${className}`; // 클래스네임값이 바뀌게 하기
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
