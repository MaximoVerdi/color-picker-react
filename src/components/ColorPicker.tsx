import React, { useState } from "react";
import { hexToRgb, hexToHsl } from "../utils/colorUtils";

interface ColorPickerProps {
  defaultColor?: string;
  format?: "hex" | "rgb" | "hsl";
  onChange?: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  defaultColor = "#ff0000",
  format = "hex",
  onChange,
}) => {
  const [color, setColor] = useState(defaultColor);
  const [formatType, setFormatType] = useState(format);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const getColorValue = () => {
    switch (formatType) {
      case "rgb":
        return hexToRgb(color);
      case "hsl":
        return hexToHsl(color);
      default:
        return color;
    }
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(getColorValue());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-lg shadow-lg">
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="w-20 h-20 cursor-pointer rounded-lg border border-gray-500"
      />
      <p className="text-lg text-white font-semibold">{getColorValue()}</p>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 rounded-md text-white ${formatType === "hex" ? "bg-blue-500" : "bg-gray-600"}`}
          onClick={() => setFormatType("hex")}
        >
          HEX
        </button>
        <button
          className={`px-3 py-1 rounded-md text-white ${formatType === "rgb" ? "bg-blue-500" : "bg-gray-600"}`}
          onClick={() => setFormatType("rgb")}
        >
          RGB
        </button>
        <button
          className={`px-3 py-1 rounded-md text-white ${formatType === "hsl" ? "bg-blue-500" : "bg-gray-600"}`}
          onClick={() => setFormatType("hsl")}
        >
          HSL
        </button>
        <button 
        onClick={copyToClipBoard}
        className="px-4 py-2 mt-2 rounded-md text-white bg-green-500 hover:bg-green-600"
        >
            {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );
};
