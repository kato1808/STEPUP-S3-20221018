import { StrictMode, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowflag, setFaceShowflag] = useState(true);

  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowflag(!faceShowflag);
  };

  if (num % 3 === 0) {
    faceShowflag || setFaceShowflag(true);
  } else {
    faceShowflag && setFaceShowflag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowflag && <p>lallrkgk</p>}
    </>
  );
};

export default App;
