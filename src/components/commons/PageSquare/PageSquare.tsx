import Box from '@material-ui/core/Box';
import { ReactNode } from 'react';
// import styled from 'styled-components';

// const PageSquareWrapper = styled(Box)`
//   background: ;
// `;
type PageSquareProps = {
  children: ReactNode;
};

// type PageSquareProps = PageSquareOwnProps & React.ComponentType<BoxProps>;

const PageSquare = ({ children }: PageSquareProps): JSX.Element => (
  <Box m={1}>{children}</Box>
);

export default PageSquare;
