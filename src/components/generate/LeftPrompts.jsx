/* eslint-disable react/prop-types */
import useGenerate from "../../pages/tomnov-generate/generate.hooks";

const LeftPrompts = () => {
  const { fetchPrompts, handlePromptSelection, setIndex, selectedPrompts } =
    useGenerate();

  const handlePromptClick = (prompt, index) => {
    if (!prompt.disabled) {
      handlePromptSelection(prompt);
      setIndex(index);
    }
  };

  return (
    <div className="flex flex-wrap gap-5 animate-fade">
      {fetchPrompts?.map((prompt, i) => (
        <div
          className={`flex flex-col mb-3 gap-2 relative w-24 `}
          key={i}
          onClick={() => handlePromptClick(prompt, i)}
        >
          <div className="flex-1 w-24 h-24 relative cursor-pointer">
            <img
              src={prompt.img}
              className="object-cover w-full h-20 rounded-lg"
              alt="prompt"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-50 rounded-lg"></div>
            {selectedPrompts.some((p) => p._id === prompt._id) ? (
              <div className="absolute top-0 left-0 w-full h-full bg-purple-800 opacity-50 rounded-lg"></div>
            ) : null}
          </div>
          <h1 className="text-white text-sm overflow-hidden text-ellipsis whitespace-nowrap w-full text-center">
            {prompt.text}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default LeftPrompts;
