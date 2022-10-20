import { useState, useCallback } from "react";
import ".";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>カウントアップ</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
// export default App;
