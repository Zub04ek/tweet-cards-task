import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0 24px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 2px solid #5736a3;
`;

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  gap: 16px;
`;
