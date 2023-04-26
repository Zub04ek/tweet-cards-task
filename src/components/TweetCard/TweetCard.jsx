import { useState } from 'react';
import {
  Card,
  Line,
  Logo,
  UserInfo,
  UserBox,
  Image,
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
import background from '../../images/picture.png';

export const TweetCard = ({ tweetUser }) => {
  const dispatch = useDispatch();

  const [newFollowers, setNewFollowers] = useState(tweetUser.followers);
  const [status, setStatus] = useState(tweetUser.status);

  const toggleFollowers = () => {
    console.log('tweetUser', tweetUser);

    if (status === 'follow') {
      setNewFollowers(prevFollower => prevFollower + 1);
      setStatus('following');
    } else {
      setNewFollowers(prevFollower => prevFollower - 1);
      setStatus('follow');
    }

    console.log('newFollowers', newFollowers);

    dispatch(editUser({ ...tweetUser, followers: newFollowers, status }));
  };

  const numFormat = Intl.NumberFormat('en-US');

  return (
    <Card>
      <Image src={background} alt="background" />
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
          <FollowingButton type="button" onClick={toggleFollowers}>
            Following
          </FollowingButton>
        ) : (
          <FollowButton type="button" onClick={toggleFollowers}>
            Follow
          </FollowButton>
        )}
      </UserBox>
    </Card>
  );
};
