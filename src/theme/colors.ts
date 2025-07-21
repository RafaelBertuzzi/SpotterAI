const color = {
  white: "#FFFFFF",
  black: "#000000",

  primary: "#1B72E8",
  primary_100: "#9DC0F9",

  gray_50: "#f9fafb",
  gray_100: "#f3f4f6",
  gray_200: "#e5e7eb",
  gray_300: "#d1d5db",
  gray_400: "#9ca3af",
  gray_500: "#6b7280",
  gray_600: "#4b5563",
  gray_700: "#374151",
  gray_800: "#1f2937",
  gray_900: "#111827",
  gray_950: "#030712",

  neutral_50: "#F4F8FA",
  neutral_100: "#E9F1F4",
  neutral_150: "#E7EAEB",
  neutral_200: "#CFD6DA",
  neutral_250: "#B4BDC1",
  neutral_300: "#AAB4B9",
  neutral_400: "#8E9BA1",
  neutral_500: "#697A82",
  neutral_600: "#435963",
  neutral_700: "#3A4C54",
  neutral_800: "#333F45",
  neutral_900: "#1E282D",

  success_50: "#E7F6ED",
  success_100: "#DAF2E3",
  success_200: "#C0E3B6",
  success_300: "#8BE365",
  success_400: "#7ED957",
  success_500: "#6FC04D",
  success_600: "#3AAC09",

  error_50: "#FFEBEB",
  error_200: "#F4C6CC",
  error_300: "#ECA0AA",
  error_400: "#DE4C5E",
  error_450: "#E53935",
  error_500: "#D00019",
  error_700: "#A51A15",
};

export { color as Colors };

export type TColorKeys = keyof typeof color;
