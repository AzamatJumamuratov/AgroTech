const NewsItemPageModal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg relative max-w-4xl w-full max-h-screen p-3">
        {/* Кнопка закрытия */}
        <div className="flex justify-end p-2">
          <button
            className="text-gray-500 hover:text-black text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Контент с прокруткой */}
        <div className="max-h-[80vh] overflow-y-auto px-4 pb-4">{children}</div>
      </div>
    </div>
  );
};

export default NewsItemPageModal;
