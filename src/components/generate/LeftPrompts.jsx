/* eslint-disable react/prop-types */

import useGenerate from "../../pages/tomnov-generate/generate.hooks";
const LeftPrompts = () => {
  const { fetchPrompts, handlePromptSelection, selectedPrompts } =
    useGenerate();
  return (
    <div className="flex flex-wrap gap-5 animate-fade">
      {fetchPrompts?.data?.map((prompt, i) => (
        <div
          className={`flex flex-col mb-3 gap-2 relative w-24`} // Set a fixed width for the items
          key={i}
          onClick={() => handlePromptSelection(prompt)}
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
            <h1 className="text-center text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {i + 1}
            </h1>
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
