import "../styles/app.css";
import ThemeContextProvider from "../lib/context";

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeContextProvider>
            <Component {...pageProps} />
        </ThemeContextProvider>
    );
}
