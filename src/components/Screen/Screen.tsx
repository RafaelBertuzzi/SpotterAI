import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Column } from "~/components";
import { IBoxProps } from "~/components/Box/Box";

export const Screen = ({ children, ...rest }: IBoxProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <Column flex={1} paddingTop={top} {...rest}>
      {children}
    </Column>
  );
};
