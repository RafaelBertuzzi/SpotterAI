import { Box, IBoxProps } from './Box';

export const Row = ({ children, ...rest }: IBoxProps) => (
  <Box {...rest} direction="row">
    {children}
  </Box>
);
