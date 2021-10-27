import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ReactNode, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const AxFooterWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const AxFooterBox = styled(Paper)`
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 14px;
  height: 1.8rem;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface AxFooterProps {
  content: ReactNode;
}

const AxFooter = ({ content }: AxFooterProps): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <AxFooterWrapper>
      <AxFooterBox elevation={3}>
        <Typography
          variant="caption"
          style={{ color: theme.palette.secondary.contrastText }}
        >
          {content}
        </Typography>
      </AxFooterBox>
    </AxFooterWrapper>
  );
};

export default AxFooter;
