const LangButton = ({ language, onClick, current, children, theme = "dark" }) => {
  let isActive = language == current;
  
  const themes = {
    dark: {
      active: "bg-[#F39C12] text-white",
      inactive: "bg-white/30 text-white hover:bg-white/40",
    },
    light: {
      active: "bg-[#32694e] text-white",
      inactive: "bg-gray-100 text-gray-600 hover:bg-gray-200",
    }
  };

  const currentTheme = themes[theme] || themes.dark;

  return (
    <button
      onClick={(e) => onClick(language)}
      className={`${
        isActive ? currentTheme.active : currentTheme.inactive
      } py-1 px-3 active:scale-110 duration-100 ease-in-out rounded-lg text-xs font-bold transition-all`}
    >
      {children}
    </button>
  );
};

export default LangButton;
