import { useRef, memo } from "react";

const Counts = ({data}) => {
  const renderCount = useRef(0)

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <p>My name is {data.name}</p>
      </p>
    </div>
  );
};

export default memo(Counts)