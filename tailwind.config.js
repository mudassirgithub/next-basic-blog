module.exports = {
    purge: false,
    theme: {
        extend: {
            screens: {
                xs: "320px",
            },
            fontFamily: {
                poppins: ["Poppins"],
            },
            minWidth: {
                xs: "320px",
            },
            textColor: {
                main: "var(--colorPrimary)",
                sub: "var(--colorSecondary)",
            },
            backgroundColor: {
                main: "var(--backgroundColorPrimary)",
                "code-block": "var(--backgroundColorSecondary)",
                blockquote: "var(--backgroundColorThird)",
            },
            borderColor: {
                main: "var(--colorPrimary)",
            },
            divideColor: {
                main: "var(--colorPrimary)",
            },
        },
    },
};
