import React from "react";
import { Link } from "react-router";

const ChatButton = () => {
  return (
    <Link
      to="/chat"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-110 hover:bg-primary-light hover:shadow-primary/50 focus:outline-none active:scale-95 animate-pulse-soft"
      aria-label="Open Chat"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </Link>
  );
};

export default ChatButton;
