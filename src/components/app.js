import React, { useState } from "react";

import "./app.css";

import NavBar from "./nav-bar";
import ToolPanel from "./tool-panel";
import Canvas from "./canvas";

export default function App() {
  const [activeTool, setActiveTool] = useState("pen");
  const [penOptions, setPenOptions] = useState({
    strokeWidth: 10,
    strokeColor: "#000000",
    lineType: "solid"
  });
  const [eraserOptions, setEraserOptions] = useState({
    strokeWidth: 10,
    lineType: "solid"
  });
  const [stampOptions, setStampOptions] = useState({
    selectedImage: "",
    imageWidth: 200
  });
  const [downloadOptions, setDownloadOptions] = useState({
    downloadImageAction: false,
    savedCanvasImage: ""
  });
  const [clearCanvas, setClearCanvas] = useState(false);

  return (
    <React.Fragment>
      <NavBar activeTool={activeTool} setActiveTool={setActiveTool} />
      <ToolPanel
        activeTool={activeTool}
        penOptions={penOptions}
        setPenOptions={setPenOptions}
        eraserOptions={eraserOptions}
        setEraserOptions={setEraserOptions}
        stampOptions={stampOptions}
        setStampOptions={setStampOptions}
        downloadOptions={downloadOptions}
        setDownloadOptions={setDownloadOptions}
        setClearCanvas={setClearCanvas}
      />
      <Canvas
        activeTool={activeTool}
        penOptions={penOptions}
        eraserOptions={eraserOptions}
        stampOptions={stampOptions}
        downloadOptions={downloadOptions}
        setDownloadOptions={setDownloadOptions}
        clearCanvas={clearCanvas}
        setClearCanvas={setClearCanvas}
      />
    </React.Fragment>
  );
}
