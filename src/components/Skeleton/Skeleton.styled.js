import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const StyledSkeleton = styled(Skeleton)`
  border-radius: 2px;
  :not(:nth-of-type(4n + 4)) {
    margin-right: 15px;
  }
  :not(:nth-of-type(n + 16)) {
    margin-bottom: 15px;
  }
`;
