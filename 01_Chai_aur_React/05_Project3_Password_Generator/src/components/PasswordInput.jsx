import React, { useCallback, useRef } from "react";

export const PasswordInput = ({ password, onCopy }) => {
  const passwordRef = useRef(null);

  const handleCopy = useCallback(() => {
    passwordRef.current.select();
    onCopy();
  }, [onCopy]);

  return (
    <div className="flex shadow-md rounded-lg overflow-hidden mb-4 ">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-[#334155]"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={handleCopy}
        className="outline-none bg-teal-500 text-white px-3 py-0.5 shrink-0"
      >
        Copy
      </button>
    </div>
  );
};
