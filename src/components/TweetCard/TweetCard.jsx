import { useEffect, useState } from 'react';
import {
  Card,
  Line,
  Logo,
  LogoImage,
  UserInfo,
  UserBox,
  Image,
  FollowButton,
  Titles,
  FollowingButton,
} from './TweetCard.styled';
import { editUser } from 'helpers/api';

export const TweetCard = ({ user: { user, tweets, followers, id } }) => {
  const [userId, setUserId] = useState('');
  const [newFollowers, setNewFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollowers = () => {
    setUserId(id);
    if (!isFollowing) {
      setNewFollowers(prevFollower => prevFollower + 1);
      setIsFollowing(true);
    } else {
      setNewFollowers(prevFollower => prevFollower - 1);
      setIsFollowing(false);
    }

    // try {
    //   await editUser(id, newFollowers);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const editUsersInfo = async () => {
      try {
        await editUser(userId, newFollowers);
      } catch (err) {
        console.log(err);
      }
    };

    editUsersInfo();
  }, [newFollowers, userId]);

  const numFormat = Intl.NumberFormat('en-US');

  return (
    <Card>
      <Logo href="https://goit.global/ua/">
        <LogoImage src="images/Logo.png" alt="logo" />
      </Logo>
      <Image src="images/picture.png" alt="background" />
      <Line />
      <UserBox>
        <Titles>
          <UserInfo>{user}</UserInfo>
          <UserInfo>{numFormat.format(tweets)} Tweets</UserInfo>
          <UserInfo>{numFormat.format(newFollowers)} Followers</UserInfo>
        </Titles>
        {isFollowing ? (
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
