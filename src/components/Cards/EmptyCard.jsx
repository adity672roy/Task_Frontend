import React from "react";

const EmptyCard = () => {
  return (
    <div className="w-full flex items-center flex-col gap-6 justify-center">
      <svg
        width="300"
        height="400"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#6A5ACD", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#48D1CC", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          ry="4"
          fill="url(#grad1)"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="6"
          y1="8"
          x2="18"
          y2="8"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="12"
          x2="18"
          y2="12"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="16"
          x2="14"
          y2="16"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="16" r="2" fill="#ffffff" />
        <svg
          x="16"
          y="16"
          width="8"
          height="8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="url(#grad1)"
            stroke="#000000"
            strokeWidth="0.5"
          />
          <line
            x1="12"
            y1="8"
            x2="12"
            y2="16"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="12"
            x2="16"
            y2="12"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </svg>

      <h1 className="text-2xl text-slate-700 font-bold">Start adding notes</h1>
    </div>
  );
};

export default EmptyCard;
