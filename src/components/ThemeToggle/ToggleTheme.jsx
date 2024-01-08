import { useTheme } from "./Theme-Context";
import "./styles.css";

export const ToggleTheme = () => {
  const { theme, handleThemeChange } = useTheme();
  //   console.log(theme)
  return (
    <>
      <nav className="main_Nav">
        <ul className="list">
          <li>Home</li>
          <li>Blog</li>
          <li>Title</li>
        </ul>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleThemeChange}
              checked={theme === "dark"}
            />
          </label>
        </div>
      </nav>
      <div>ToggleTheme</div>
    </>
  );
};
