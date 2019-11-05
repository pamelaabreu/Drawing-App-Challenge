import React, { useRef, useState, useEffect } from "react";

export default function Canvas({
  activeTool,
  penOptions,
  eraserOptions,
  stampOptions,
  downloadOptions,
  setDownloadOptions,
  clearCanvas,
  setClearCanvas
}) {
  const canvasRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  // Listening for if clearCanvas is set to true
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (clearCanvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      setClearCanvas(false);
    }

    setCtx(canvas.getContext("2d"));
  }, [clearCanvas]);

  // Listening for if downloadImageAction is set to true to download canvas
  useEffect(() => {
    const canvas = canvasRef.current;

    if (downloadOptions.downloadImageAction) {
      const canvasImage = canvas.toDataURL("image/png");
      const win = window.open();
      win.document.write(
        `<img src="${canvasImage}" alt="Downloaded Image From Canvas" />`
      );

      setDownloadOptions({
        ...downloadOptions,
        downloadImageAction: false,
        savedCanvasImage: canvasImage
      });
    }
  }, [downloadOptions]);

  const getX = event => {
    if (event.pageX === undefined) {
      return event.targetTouches[0].pageX - canvasRef.current.offsetLeft;
    } else {
      return event.pageX - canvasRef.current.offsetLeft;
    }
  };

  const getY = event => {
    if (event.pageY === undefined) {
      return event.targetTouches[0].pageY - canvasRef.current.offsetTop;
    } else {
      return event.pageY - canvasRef.current.offsetTop;
    }
  };

  const start = event => {
    if (activeTool === "pen" || activeTool === "eraser") {
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(getX(event), getY(event));
      event.preventDefault();
    }
  };

  // StartStamp only needs to invoke drawing if the conditionals are met
  const startStamp = event => {
    if (activeTool === "stamp" && stampOptions.selectedImage.length > 0) {
      setIsDrawing(true);
      event.preventDefault();
    }
  };

  const draw = event => {
    if (isDrawing) {
      // Conditional render to use stamp tool
      if (activeTool === "stamp" && stampOptions.selectedImage.length > 0) {
        const img = new Image();
        img.src = stampOptions.selectedImage;

        ctx.drawImage(
          img,
          getX(event),
          getY(event),
          stampOptions.imageWidth,
          stampOptions.imageWidth
        );
        end(event);
      }
      // Conditional render to use pen or eraser tool
      else {
        ctx.lineTo(getX(event), getY(event));
        if (penOptions.lineType === "dot" && activeTool === "pen") {
          ctx.setLineDash([20, 20]);
        } else if (penOptions.lineType === "dash" && activeTool === "pen") {
          ctx.setLineDash([100, 30]);
        } else ctx.setLineDash([]);
        ctx.strokeStyle = penOptions.strokeColor;
        ctx.globalCompositeOperation =
          activeTool === "pen" ? "source-over" : "destination-out";
        ctx.lineWidth =
          activeTool === "pen"
            ? penOptions.strokeWidth
            : eraserOptions.strokeWidth;
        ctx.lineJoin = "round";
        ctx.stroke();
      }
    }
    event.preventDefault();
  };

  const end = event => {
    if (isDrawing) {
      ctx.stroke();
      ctx.closePath();
      setIsDrawing(false);
    }
    event.preventDefault();
  };

  return (
    <canvas
      width={window.innerWidth - 262}
      height={window.innerHeight}
      className="canvas"
      ref={canvasRef}
      onMouseDown={start}
      onMouseMove={draw}
      onMouseUp={end}
      onClick={startStamp}
    />
  );
}
