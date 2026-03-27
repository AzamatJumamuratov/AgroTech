
const ChatAvatar = ({ name, id, size = "md", className = "" }) => {
  // Simple initials logic
  const initials = name
    ? name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
    : "??";

  // Dynamic color generation based on seed (id or name)
  const getBgColor = (seed) => {
    const colors = [
      "bg-[#32694e]", // Primary Green
      "bg-[#759933]", // Light Green
      "bg-[#F39C12]", // Orange
      "bg-[#E67E22]", // Pumpkin
      "bg-[#D35400]", // Carrot
      "bg-[#2980B9]", // Belize Hole (Blue)
      "bg-[#8E44AD]", // Wisteria (Purple)
      "bg-[#2C3E50]", // Midnight Blue
      "bg-[#16A085]", // Green Sea
      "bg-[#27AE60]", // Nephritis
    ];

    // Simple numeric hash function
    const s = String(seed || "default");
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash = s.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div className={`relative shrink-0 ${className}`}>
      <div
        className={`${sizeClasses[size] || sizeClasses.md
          } rounded-full flex items-center justify-center font-bold text-white shadow-sm transition-transform duration-300 hover:scale-105 ${getBgColor(
            id
          )}`}
      >
        {initials}
      </div>
    </div>
  );
};

export default ChatAvatar;
