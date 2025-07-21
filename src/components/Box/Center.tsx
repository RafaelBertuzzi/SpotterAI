import { Box, IBoxProps } from "./Box";

export const Center = ({ children, ...rest }: IBoxProps) => {
  return (
    <Box {...rest} alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};
