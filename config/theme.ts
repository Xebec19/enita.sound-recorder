declare module "styled-components/native" {
  export interface DefaultTheme {
    background: string;
    surface: string;
    text: string;
    primary: string;
    primaryText: string;
    sizes: string[];
  }
}

export const sizes = [
  "0px",
  "4px",
  "8px",
  "12px",
  "16px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "40px",
];

// main theme colors are #e52165 and #0d1137

export const lightTheme = {
  background: "#f9f9fb", // light gray background
  surface: "#ffffff", // pure white cards/surfaces
  text: "#1a1a1a", // near-black text
  primary: "#ff3b30", // vibrant red for record button
  primaryText: "#ffffff", // white text on primary
  sizes,
};

export const darkTheme = {
  background: "#121212", // true dark background
  surface: "#1e1e1e", // slightly lighter than background
  text: "#f1f1f1", // near-white text
  primary: "#ff453a", // slightly brighter red
  primaryText: "#ffffff", // white text on primary
  sizes, // added sizes array
};
