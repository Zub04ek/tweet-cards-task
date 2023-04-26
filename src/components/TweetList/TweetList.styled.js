import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 2px solid #5736a3;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const LoadMoreButton = styled.button`
  margin: 16px auto;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const TweetLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: #5736a3;
  }
`;
