import React from "react";

export default function Eraser({
  eraserOptions,
  setEraserOptions,
  setClearCanvas
}) {
  return (
    <div>
      <h1>Eraser</h1>
      <section className="pb-30">
        <label className="tool-panel--bold">
          Eraser Width: {eraserOptions.strokeWidth}
          <input
            value={eraserOptions.strokeWidth}
            name="eraser-width"
            max="100"
            min="1"
            type="range"
            onChange={e =>
              setEraserOptions({
                ...eraserOptions,
                strokeWidth: e.target.value
              })
            }
          />
        </label>
      </section>
      <section>
        <button
          className="tool-panel__button"
          name="clear-canvas"
          onClick={e => {
            setClearCanvas(true);
          }}
        >
          Clear Canvas
        </button>
      </section>
    </div>
  );
}
