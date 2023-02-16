import React from "react";

const ProgressBar = ({ width, className }) => {
  return (
    <div
      className={`${className} w-full rounded-full bg-gray-200 dark:bg-gray-700`}
    >
      <div
        className="rounded-full bg-socias-pink p-0.5 text-center text-xs font-medium leading-none text-white"
        style={{ width: `${width}%` }}
      >
        {`${width}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
