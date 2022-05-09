import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#2684FF"
        d="M15.808 7.552L8.69.667 8 0 2.642 5.183l-2.45 2.37A.623.623 0 000 8c0 .168.069.329.192.448l4.895 4.735L8 16l5.358-5.183.083-.08 2.367-2.29A.623.623 0 0016 8a.623.623 0 00-.192-.448zM8 10.365L5.554 8 8 5.635 10.446 8 8 10.365z"
      ></path>
      <path
        fill="url(#paint0_linear)"
        d="M8 5.634A3.918 3.918 0 016.794 2.83 3.917 3.917 0 017.983.018L2.63 5.193 5.543 8.01 8 5.634z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M10.452 7.994L8 10.365c.383.37.686.81.893 1.293a3.87 3.87 0 010 3.05c-.207.483-.51.922-.893 1.292l5.365-5.189-2.913-2.817z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="7.563"
          x2="4.262"
          y1="3.241"
          y2="6.654"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC"></stop>
          <stop offset="1" stopColor="#2684FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="216.055"
          x2="331.647"
          y1="490.616"
          y2="413.158"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC"></stop>
          <stop offset="1" stopColor="#2684FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
