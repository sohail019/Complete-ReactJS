export const Button = ({setColor, backgroundColor, label}) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor}}
      onClick={() => setColor(backgroundColor)}
    >
      {label}
    </button>
  );
}
