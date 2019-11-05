import React from "react";

export default function Download({ downloadOptions, setDownloadOptions }) {
  // Conditional rendering to show image that was downloaded
  let renderDownloadImage;
  if (downloadOptions.savedCanvasImage.length > 0) {
    renderDownloadImage = (
      <section>
        <img
          className="tool-panel__image-placeHolder"
          src={downloadOptions.savedCanvasImage}
          alt="Downloaded From Canvas"
        />
      </section>
    );
  }

  return (
    <div>
      <h1>Download</h1>
      <section className="pb-30">
        <button
          className="tool-panel__button"
          name="download-image"
          onClick={e =>
            setDownloadOptions({
              ...downloadOptions,
              downloadImageAction: true
            })
          }
        >
          Download Image
        </button>
      </section>
      {renderDownloadImage}
    </div>
  );
}
