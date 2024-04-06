import { client } from "@gradio/client";

export default function Test() {
  const faceSwap = async () => {
    try {
      const response_0 = await fetch("https://i.ibb.co/jhhhd9t/local.png");
      const exampleImage = await response_0.blob();
      const response_1 = await fetch(
        "https://i.ibb.co/2FwZVtw/pexels-engin-akyurt-1642228.jpg",
      );
      const exampleImage2 = await response_1.blob();

      const app = await client(
        "https://felixrosberg-face-swap.hf.space/--replicas/p7pq1/",
      );
      const result = await app.predict("/run_inference", [
        exampleImage, // blob in 'Target' Image component
        exampleImage2, // blob in 'Source' Image component
        0, // number (numeric value between 0 and 100) in 'Anonymization ratio (%)' Slider component
        0, // number (numeric value between 0 and 100) in 'Adversarial defense ratio (%)' Slider component
        ["Compare"], // undefined  in 'Mode' Checkboxgroup component
      ]);

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={faceSwap}>click me</button>
    </div>
  );
}
