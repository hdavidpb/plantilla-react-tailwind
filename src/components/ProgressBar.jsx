import React from "react";

const ProgressBar = ({ width }) => {
  return (
    <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="mb-2 rounded-full p-0.5 text-center text-xs font-medium leading-none text-white"
        style={{ width: `${width}%`, backgroundColor: "rgb(255, 119, 175 )" }}
      >
        {`${width}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
