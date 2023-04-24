import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const LogoImage = styled.img`
  background-image: url('../../images/Logo.png');
`;

export const Image = styled.img`
  position: absolute;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserBox = styled.div`
  position: relative;
  top: 222px;
  height: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 62px;
  /* padding-bottom: 36px; */
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const UserInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  /* text-align: center; */
  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  padding: 14px 56px;
  margin-top: 26px;
  width: 196px;
  background: #ebd8ff;
  border: 0px solid transparent;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;

export const FollowingButton = styled.button`
  padding: 14px 39px;
  margin-top: 26px;
  width: 196px;
  background: #5cd3a8;
  border: 0px solid transparent;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;
