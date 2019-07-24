import colors from "./Colors";

const family = {
  base: "Montserrat",
  bold: "ProximaNova-Bold"
};

const size = {
  big: 36,
  h1: 20,
  h2: 16,
  h3:14,
  medium: 14,
  small: 13,
  tiny:10
};

const style = {
    labelButton: {
        fontFamily: family.bold,
        fontSize: size.h2,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 1.5,
        color: colors.white
      },
      h1: {
        fontFamily: family.base,
        fontSize: size.h1,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.black
      },
      h3: {
        fontFamily: family.bold,
        fontSize: size.h3,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 1.75,
        textAlign: "center",
        color: colors.black
      },
      placeholder: {
        fontFamily: family.base,
        fontSize: size.h3,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: colors.brownGrey
      },
      textStyle: {
        fontFamily: family.base,
        fontSize: size.h3,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: colors.black
      },
      recipeNameCard: {
        fontFamily: family.base,
        fontSize: size.h2,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.5,
        color: colors.black
      },
      category: {
        fontFamily: family.base,
        fontSize: size.tiny,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 1,
        textAlign: "center",
        color: colors.brownGrey
      },
      information: {
        fontFamily: family.base,
        fontSize: size.small,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.5,
        textAlign: "center",
        color: colors.brownGrey
      }
    
};

export default { style, size, family };