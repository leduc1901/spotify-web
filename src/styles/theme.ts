import { createTheme } from "@mui/material/styles";

enum Colors {
  gray = "gray",
}

export type SemanticColor = {
  [key in Colors]: {
    [key: string]: string;
  };
};

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    background: TypeBackground;
    semantic: SemanticColor;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    semantic: SemanticColor;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1DB954",
    },
    semantic: {
      gray: {
        100: "#181818",
        200: "##121212",
        300: "#000",
      },
    },
  },
});
