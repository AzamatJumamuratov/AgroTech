import { useState } from "react";

const NewsTags = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const addTag = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      const newTag = input.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Теги</label>
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 border rounded-md bg-white">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
          >
            {tag}
            <button onClick={() => removeTag(tag)}>
              <span className="s-9">X</span>
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTag}
          placeholder="Добавьте тег и нажмите Enter"
          className="flex-1 min-w-[150px] border-none outline-none text-sm text-gray-700"
        />
      </div>
    </div>
  );
};

export default NewsTags;
