import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
    theme: "",
    setTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        function loadTheme() {
            const theme = localStorage.getItem("theme");
            return theme || "light";
        }
        setTheme(loadTheme());
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
