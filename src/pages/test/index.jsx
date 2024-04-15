import toast from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const Test = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
    </div>
  );
};

export default Test;
