# Dynamic Theme Demo

A simple and visually appealing React app that demonstrates dynamic theme-changing functionality using **Mantine's ColorPicker** and **Tailwind CSS**. The page allows users to select a color, which updates the theme in real time across various components.

---

## Features

- 🎨 **Dynamic Theme Updates**: Select a color to update the page's theme dynamically.
- 📱 **Responsive Design**: Fully responsive and adapts to all screen sizes.
- 🖌️ **Preview Card**: Real-time preview of the selected theme color.
- 💡 **Built with Modern Tools**: Uses **React**, **Mantine**, and **Tailwind CSS** for an elegant design and smooth functionality.

---

## Tech Stack

- **React**: Frontend framework for building the UI.
- **Mantine**: Provides the `ColorPicker` component for color selection.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **CSS Variables**: Enables dynamic theme color updates.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/dynamic-theme-demo.git
   cd dynamic-theme-demo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **View in Browser**:
   - Open [https://tailwind-theme-azure.vercel.app/](https://tailwind-theme-azure.vercel.app/) in your browser.

---

## Usage

1. Run the application locally.
2. Use the **color picker** to select a color.
3. Watch the theme color update in real time across the app, including the **header** and **preview card**.

---

## Project Structure

```
src/
├── Components/ThemeComponent.jsx #  logic
├── App.css         # Global styles
├── App.jsx         # Main React component
├── index.js        # Entry point
└── tailwind.config.js # Tailwind CSS configuration
```

---

## Configuration

### Tailwind CSS
To support dynamic theme colors, the following CSS variable is used in `tailwind.config.js`:

```javascript
colors: {
  theme: "var(--color-theme, #22c55e)", // Default green theme
}
```

### CSS
Define the default color in `App.css`:

```css
:root {
  --color-theme: #22c55e;
}
```

---

## Deployment

To deploy this project, use any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**:

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   Upload the contents of the `build/` directory to your hosting provider.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Mantine UI](https://mantine.dev/) for the amazing `ColorPicker` component.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- [React](https://reactjs.org/) for the robust frontend framework.

