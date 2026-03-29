import React from "react";

const ChatBackground = ({ children, className = "" }) => {
  return (
    <div 
      className={`flex-1 flex flex-col h-full overflow-x-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed ${className}`}
    >
      {children}
    </div>
  );
};

export default ChatBackground;
