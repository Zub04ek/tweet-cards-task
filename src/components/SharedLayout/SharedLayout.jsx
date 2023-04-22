import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { GlobalStyles } from 'components/Global.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <GlobalStyles />

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
