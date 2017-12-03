const STYLE_VARS = {
    colors: {
        white: "#ffffff",
        black: "#000000",
        white10: "rgba(255,255,255,.1)",
        white20: "rgba(255,255,255,.2)",
        white60: "rgba(255,255,255,.6)",
        orange: "#FF8800",
        cyan: "#0AD4FA",
        cyan86: "",
        bgColor: "#F9F9F9",
        lightGray: "#EDEDED",
        grey: "#D9D9D9",
        darkGrey: "#A3A3A3",
        darkGrey80: "rgba(97,97,97,0.80)",
        darkGreyText: "#616161"
    },

    fonts: {
        main: "Futura, Arial",
        alt: "Coco, Arial",
    },
    breakpoints: {
        small: "only screen and (max-width: 20em)",
        medium: "only screen and (min-width: 49em)",
        desktopBig: "(min-width: 106.250em)",
        desktopMedium: "(min-width: 92em)",
        laptopBig: "(min-width: 90em)",
        laptopPc: "(mix-width: 86em)",
        laptopSmall: "(min-width: 70.000em)",
        tabletLand: "(min-width: 63.938em)",
        tabletPort: "(min-width: 47em)",
        smartphoneBigLandscape: "only screen and (min-width: 40em)",
        smartphoneMediumLandscape:
            "only screen and (min-device-width: 41.688em)",
        smartphoneSmallLandscape:
            "only screen and (min-device-width: 35.500em)",
        smartphoneBig: "(min-width: 25.000em)",
        smartphoneMedium: "(min-width: 23.375em)",
        smartphoneSmall: "(max-width: 20.000em)"
    }
};

const APP_CONFIG = {

};

module.exports = {
    STYLE_VARS,
    APP_CONFIG
};