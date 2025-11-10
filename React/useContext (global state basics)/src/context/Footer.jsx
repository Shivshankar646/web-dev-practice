import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      className={`p-4 text-center ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"
      }`}
    >
      Shiv.dev © {new Date().getFullYear()}
    </footer>
  );
}
