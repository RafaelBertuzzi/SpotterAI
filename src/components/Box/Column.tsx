import { Box, IBoxProps } from './Box';

export const Column = ({ children, ...rest }: IBoxProps) => (
  <Box {...rest} direction="column">
    {children}
  </Box>
);
