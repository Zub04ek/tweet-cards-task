import { useEffect, useState } from 'react';
import {
  Card,
  Line,
  Logo,
  UserInfo,
  UserBox,
  FollowButton,
  Titles,
  FollowingButton,
  ImageBox,
  Avatar,
  Ellipse,
} from './TweetCard.styled';
import { useDispatch } from 'react-redux';
import { editUser } from 'redux/operations';
import logo from '../../images/Logo.png';

export const TweetCard = ({ tweetUser }) => {
  const dispatch = useDispatch();

  const [newFollowers, setNewFollowers] = useState(tweetUser.followers);
  const [status, setStatus] = useState(tweetUser.status);

  const updateFollowers = () => {
    if (status === 'follow') {
      setStatus('following');
      setNewFollowers(prevFollower => prevFollower + 1);
    } else {
      setStatus('follow');
      setNewFollowers(prevFollower => prevFollower - 1);
    }
  };

  useEffect(() => {
    dispatch(editUser({ ...tweetUser, followers: newFollowers, status }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, newFollowers, status]);

  const numFormat = Intl.NumberFormat('en-US');

  return (
    <Card>
      <Logo href="https://goit.global/ua/">
        <img src={logo} alt="logo" />
      </Logo>
      <Line />
      <UserBox>
        <ImageBox>
          <Ellipse>
            <Avatar src={tweetUser.avatar} alt="avatar" width="62px" />
          </Ellipse>
        </ImageBox>
        <Titles>
          <UserInfo>{numFormat.format(tweetUser.tweets)} Tweets</UserInfo>
          <UserInfo>{numFormat.format(tweetUser.followers)} Followers</UserInfo>
        </Titles>
        {tweetUser.status === 'following' ? (
          <FollowingButton type="button" onClick={updateFollowers}>
            Following
          </FollowingButton>
        ) : (
          <FollowButton type="button" onClick={updateFollowers}>
            Follow
          </FollowButton>
        )}
      </UserBox>
    </Card>
  );
};
