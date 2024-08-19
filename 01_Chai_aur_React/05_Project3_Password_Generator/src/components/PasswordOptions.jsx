export const PasswordOptions = ({length, numAllowed, charAllowed, onLengthChange, onNumToggle, onCharToggle}) => {
  return (
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          value={length}
          min={1}
          max={40}
          onChange={(e) => onLengthChange(e.target.value)}
          className="cursor-pointer bg-teal-500 text-teal-500"
        />
        <label>Length: ({length})</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={numAllowed}
          id="numberInput"
          onChange={onNumToggle}
          className="cursor-pointer"
        />
        <label htmlFor="numberInput">Number</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={charAllowed}
          id="characterInput"
          onChange={onCharToggle}
          className="cursor-pointer rounded-lg"
        />
        <label htmlFor="characterInput">
          Character
        </label>
      </div>
    </div>
  );
};
