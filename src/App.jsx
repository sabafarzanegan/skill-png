import React, { useRef, useState } from "react";

import Form from "./components/Form";
import Display from "./components/Display";
import { toPng } from "html-to-image";
const infoObj = {
  name: "saba farzanegan",
  skills: "html,css",
  pictureUrl: null,
  dateRegister: 0,
  filename: "FILE",
};

function App() {
  const [data, setData] = useState(infoObj);

  const DisplayRef = useRef(true);
  const saveImage = async () => {
    const url = await toPng(DisplayRef.current, { pixelRatio: 2 });
    const filename = `${infoObj.filename}.png`;
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };
  return (
    <>
      <main className="flex items-center justify-center gap-4 bg-stone-800 h-screen ">
        <Form data={data} setData={setData} saveImage={saveImage} />

        <Display
          data={data}
          setData={setData}
          infoObj={infoObj}
          ref={DisplayRef}
        />
      </main>
    </>
  );
}

export default App;
