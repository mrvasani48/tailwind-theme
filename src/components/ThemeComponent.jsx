import { useState } from "react";
import { ColorPicker, Text } from "@mantine/core";

function ThemeComponent() {
  const [colorTheme, setColorTheme] = useState("#ff014f");

  // Update CSS variable dynamically
  const handleColorChange = (newColor) => {
    setColorTheme(newColor);
    document.documentElement.style.setProperty("--color-theme", newColor);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      {/* Header Section */}
      <header
        className="w-full text-center py-6 bg-theme text-white font-bold text-xl shadow-lg rounded-md"
      >
        Dynamic Theme Demo
      </header>

      {/* Main Content */}
      <main className="mt-10 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left: Color Picker */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Select a Theme Color
            </h2>
            <ColorPicker
              value={colorTheme}
              onChange={handleColorChange}
              className="w-full"
            />
            <Text className="mt-4 text-gray-500">Current Color: {colorTheme}</Text>
          </div>

          {/* Right: Preview Card */}
          <div
            className="rounded-lg shadow-md p-6 text-theme text-center"
          >
            <h3 className="text-lg font-bold mb-4">Preview Card</h3>
            <p className="text-sm text-theme">
              This card adapts dynamically to the selected theme color. Change
              the color using the picker!
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        Built with <span className="text-theme font-bold">React</span> and{" "} 
         <span className="text-theme font-bold">Mantine</span> and {" "} 
         <span className="text-theme font-bold">Tailwind CSS</span>.
      </footer>
    </div>
  );
}

export default ThemeComponent;
