import React from "react";

export default function Stamp({ stampOptions, setStampOptions }) {
  // Conditional rendering to show image uploaded
  let renderStampImage;
  if (stampOptions.selectedImage.length > 0) {
    renderStampImage = (
      <section className="pb-30">
        <img
          className="tool-panel__image-placeHolder"
          src={stampOptions.selectedImage}
          alt={stampOptions.selectedImage}
        />
      </section>
    );
  }

  return (
    <div>
      <h1>Stamp</h1>
      <section className="pb-30">
        <label className="tool-panel--bold">
          Max Width: {stampOptions.imageWidth}
          <input
            value={stampOptions.imageWidth}
            name="max-image-width"
            max="600"
            min="1"
            type="range"
            onChange={e =>
              setStampOptions({ ...stampOptions, imageWidth: e.target.value })
            }
          />
        </label>
      </section>
      <section className="pb-30">
        <label className="tool-panel--bold">
          Upload An Image:
          <input
            name="upload-image"
            type="file"
            accept="image/png image/jpeg"
            onChange={e =>
              setStampOptions({
                ...stampOptions,
                selectedImage: URL.createObjectURL(e.target.files[0])
              })
            }
          />
        </label>
      </section>
      {renderStampImage}
    </div>
  );
}
