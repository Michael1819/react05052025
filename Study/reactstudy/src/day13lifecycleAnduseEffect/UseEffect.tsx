import { useEffect, useState } from "react";

// 子组件：InputWithEffect
function InputWithEffect({ text, setText }: { text: string; setText: (val: string) => void }) {
  useEffect(() => {
    console.log("Input mounted");

    return () => {
      console.log("Input unmounted");
    };
  }, []);

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

// 父组件
export default function UseEffect() {
  const [text, setText] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <h1>UseEffect</h1>

      {showInput && <InputWithEffect text={text} setText={setText} />}

      <button onClick={() => setShowInput((prev) => !prev)}>
        {showInput ? "Hide input" : "Show input"}
      </button>
    </div>
  );
}

