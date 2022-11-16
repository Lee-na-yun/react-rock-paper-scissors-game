import HandIcon from "./HandIcon";
import purple from "./assets/purple.svg";

const handButtonStyle={
  width: '166px',
  height : '166px',
  border:'none',
  outline:'none',
  textAlign:'center',
  cursor:'pointer',
  backgroundColor:'transparent',
  backgroundImage:`url('${purple}')`,
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center',
  backgroundSize:'contain'
};

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button style={handButtonStyle} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
