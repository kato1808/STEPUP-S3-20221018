import { useState } from "react";
import ".";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const onChangeText = (e) => setText(e.target.value);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button>カウントアップ</button>
      <ChildArea />
    </div>
  );
}
// export default App;
