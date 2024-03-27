type IColors = {
  primary: "#9C3A3F";
  "primary-dark": "#851D22";
  "text-black": "rgba(17, 17, 17, 1)"; // #111111
  "text-sub-black": "rgba(85, 85, 85, 1)";
  black: "rgba(51, 51, 51, 1)";
  "black-15": "rgba(0, 0, 0, 0.15)";
  "black-30": "rgba(0, 0, 0, 0.3)";
  "black-80": "rgba(0, 0, 0, 0.8)";
  "gray-70": "#666666";
  "gray-60": "#888888";
  "gray-50": "#999999";
  "gray-45": "#C8C8C8";
  "gray-40": "#D8D8D8";
  "gray-30": "#D9D9D9";
  "gray-25": "#DDDDDD";
  "gray-20": "#F4F4F4";
  "gray-15": "#F9F9F9";
  "gray-10": "#F2F1F1";
  "text-white": "#FFFFFF";
  white: "#FFFFFF";
};

type IColorName = keyof IColors;
