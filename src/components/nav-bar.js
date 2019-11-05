import React from "react";

import PenIcon from "./icons/pen-icon";
import EraserIcon from "./icons/eraser-icon";
import StampIcon from "./icons/stamp-icon";
import DownloadIcon from "./icons/save-icon";

export default function NavBar({ activeTool, setActiveTool }) {

  // Manual style conditional rendering to show active tool class
  const isActivePenStyle = activeTool === "pen" ? "nav-bar__tool--active" : "";
  const isActiveEraserStyle =
    activeTool === "eraser" ? "nav-bar__tool--active" : "";
  const isActiveStampStyle =
    activeTool === "stamp" ? "nav-bar__tool--active" : "";
  const isActiveDownloadStyle =
    activeTool === "download" ? "nav-bar__tool--active" : "";

  return (
    <div className="nav-bar">
      <div
        className={"nav-bar__tool " + isActivePenStyle}
        onClick={e => setActiveTool("pen")}
        title="Pen"
      >
        <PenIcon />
      </div>
      <div
        className={"nav-bar__tool " + isActiveEraserStyle}
        onClick={e => setActiveTool("eraser")}
        title="Eraser"
      >
        <EraserIcon />
      </div>
      <div
        className={"nav-bar__tool " + isActiveStampStyle}
        onClick={e => setActiveTool("stamp")}
        title="Stamp"
      >
        <StampIcon />
      </div>
      <div
        className={"nav-bar__tool " + isActiveDownloadStyle}
        onClick={e => setActiveTool("download")}
        title="Download"
      >
        <DownloadIcon />
      </div>
    </div>
  );
}
