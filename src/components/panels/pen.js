import React from "react";

export default function Pen({ penOptions, setPenOptions }) {
  // Conditional rendering to show active line style
  const activeSolidStyle =
    penOptions.lineType === "solid" ? "line-types--active" : "";
  const activeDotStyle =
    penOptions.lineType === "dot" ? "line-types--active" : "";
  const activeDashStyle =
    penOptions.lineType === "dash" ? "line-types--active" : "";

  return (
    <div>
      <h1>Pen</h1>
      <section className="pb-30">
        <label className="tool-panel--bold">Stroke Color:</label>
        <input
          type="color"
          name="stroke-color"
          value={penOptions.strokeColor}
          onChange={e => {
            setPenOptions({ ...penOptions, strokeColor: e.target.value });
          }}
        />
      </section>
      <section className="pb-30">
        <label className="tool-panel--bold">
          Stroke Width: {penOptions.strokeWidth}
          <input
            value={penOptions.strokeWidth}
            onChange={e =>
              setPenOptions({ ...penOptions, strokeWidth: e.target.value })
            }
            name="stroke-width"
            type="range"
          />
        </label>
      </section>
      <section className="pb-30">
        <label className="tool-panel--bold">Line Type:</label>
        <div className="line-types">
          <button
            name="solid-line"
            className={"line-types__option " + activeSolidStyle}
            onClick={e => setPenOptions({ ...penOptions, lineType: "solid" })}
          >
            Solid
          </button>
          <button
            name="dash-line"
            className={"line-types__option " + activeDashStyle}
            onClick={e => setPenOptions({ ...penOptions, lineType: "dash" })}
          >
            Dashed
          </button>
          <button
            name="dot-line"
            className={"line-types__option " + activeDotStyle}
            onClick={e => setPenOptions({ ...penOptions, lineType: "dot" })}
          >
            Dotted
          </button>
        </div>
      </section>
    </div>
  );
}
