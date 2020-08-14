import { useContext } from "react";
import HomeHeader from "../../components/HomeHeader";
import { ThemeContext } from "../../lib/context";
import HomeFooter from "../../components/HomeFooter";

export default function Home({ children }) {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <div
            className={
                (theme == "dark" ? "theme-dark" : "theme-light") +
                " " +
                "min-w-xs min-h-screen bg-main text-main font-poppins"
            }
        >
            <HomeHeader
                theme={theme}
                setTheme={setTheme}
                handleThemeToggle={handleThemeToggle}
            />
            {children}
            <HomeFooter />
        </div>
    );
}
