import React, { ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

export interface IBoxProps
  extends ViewProps,
    Omit<Partial<ViewStyle>, 'direction'> {
  children?: ReactNode;
  direction?: 'row' | 'column';
}

export const Box = ({
  children,
  style,
  direction = 'column',
  ...rest
}: IBoxProps) => {
  const styleProps: ViewStyle = {};
  const viewProps: ViewProps = {};

  Object.entries(rest).forEach(([key, value]) => {
    if (key in styleProps) {
      (styleProps as any)[key] = value;
    } else {
      (viewProps as any)[key] = value;
    }
  });

  return (
    <View style={[{ flexDirection: direction }, style]} {...rest}>
      {children}
    </View>
  );
};
