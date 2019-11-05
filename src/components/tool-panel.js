import React from "react";

import Pen from "./panels/pen";
import Eraser from "./panels/eraser";
import Stamp from "./panels/stamp";
import Download from "./panels/download";

export default function ToolPanel({
  activeTool,
  penOptions,
  setPenOptions,
  eraserOptions,
  setEraserOptions,
  stampOptions,
  setStampOptions,
  downloadOptions,
  setDownloadOptions,
  setClearCanvas
}) {
  let renderActivePanel;

  // Conditional rendering to show and set active tool panel
  if (activeTool === "pen") {
    renderActivePanel = (
      <Pen penOptions={penOptions} setPenOptions={setPenOptions} />
    );
  } else if (activeTool === "eraser") {
    renderActivePanel = (
      <Eraser
        eraserOptions={eraserOptions}
        setEraserOptions={setEraserOptions}
        setClearCanvas={setClearCanvas}
      />
    );
  } else if (activeTool === "stamp") {
    renderActivePanel = (
      <Stamp stampOptions={stampOptions} setStampOptions={setStampOptions} />
    );
  } else if (activeTool === "download") {
    renderActivePanel = (
      <Download
        downloadOptions={downloadOptions}
        setDownloadOptions={setDownloadOptions}
      />
    );
  }

  return <div className="tool-panel">{renderActivePanel}</div>;
}
