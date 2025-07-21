import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { Colors, TColorKeys } from "~/theme/colors";

export interface TextProps extends RNTextProps, TextStyle {
  children: React.ReactNode;
  variant?: TextVariants;
  bold?: boolean;
  black?: boolean;
  italic?: boolean;
  semiBold?: boolean;
  style?: StyleProp<TextStyle>;
  color?: TColorKeys;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
}

export function Text({
  children,
  bold,
  black,
  italic,
  semiBold,
  style,
  textAlign,
  color = "primary",
  variant = "paragraphMedium",
  ...rest
}: TextProps) {
  const textStyle: TextStyle = getTextStyle({
    bold,
    black,
    italic,
    semiBold,
    color,
    textAlign,
    variant,
  });

  const combinedStyle = [{ textAlign }, textStyle, style].filter(Boolean);

  return (
    <RNText style={combinedStyle} {...rest}>
      {children}
    </RNText>
  );
}

interface TextStyleProps extends Partial<TextProps> {
  black?: boolean;
  semiBold?: boolean;
  variant?: TextVariants;
}

function getTextStyle({
  bold,
  black,
  italic,
  semiBold,
  color,
  textAlign,
  variant,
}: TextStyleProps): TextStyle {
  return {
    fontFamily: getFontFamily(bold, black, italic, semiBold),
    textAlign,
    ...$fontSizes[variant ?? "paragraphMedium"],
    color: color ? Colors[color] : Colors.primary,
  };
}

function getFontFamily(
  bold?: boolean,
  black?: boolean,
  italic?: boolean,
  semiBold?: boolean
) {
  switch (true) {
    case black && italic:
      return $fontFamily.blackItalic;
    case black:
      return $fontFamily.black;
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | "headingLarge"
  | "headingMedium"
  | "headingSmall"
  | "paragraphLarge"
  | "paragraphMedium"
  | "paragraphSmall"
  | "paragraphCaption"
  | "paragraphCaptionSmall";

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

const $fontFamily = {
  black: "Nunito-Black",
  blackItalic: "Nunito-BlackItalic",
  bold: "Nunito-Bold",
  boldItalic: "Nunito-BoldItalic",
  italic: "Nunito-Italic",
  light: "Nunito-Light",
  lightItalic: "Nunito-LightItalic",
  medium: "Nunito-Medium",
  mediumItalic: "Nunito-MediumItalic",
  regular: "Nunito-Regular",
};
