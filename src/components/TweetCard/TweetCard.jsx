import { useState, useEffect } from 'react';
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
  ImageBox,
  Avatar,
  Ellipse,
} from './TweetCard.styled';
// import { editUser } from 'helpers/api';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/operations';
import { selectTweetUsers } from 'redux/selectors';
import { changingFollowers } from 'redux/userSlice';
import logo from '../../images/Logo.png';
import background from '../../images/picture.png';
// import icon from '../../images/Ellipse.png';
// import { ReactComponent as Icon } from '../../images/symbol-defs.svg';

export const TweetCard = ({ tweetUser }) => {
  const dispatch = useDispatch();
  // const users = useSelector(selectTweetUsers);
  // const user = users.find(user => user.id === tweetUser.id);

  // const [userId, setUserId] = useState('');
  const [newFollowers, setNewFollowers] = useState(tweetUser.followers);
  const [status, setStatus] = useState(tweetUser.status);

  const toggleFollowers = () => {
    console.log('tweetUser', tweetUser);
    console.log('status1', status);

    // setUserId(tweetUser.id);
    if (status === 'follow') {
      setNewFollowers(prevFollower => prevFollower + 1);
      setStatus('following');
    } else {
      setNewFollowers(prevFollower => prevFollower - 1);
      setStatus('follow');
    }
    console.log('status2', status);
    console.log('newFollowers', newFollowers);
    // dispatch(changingFollowers(user));

    dispatch(editUser({ ...tweetUser, followers: newFollowers, status }));

    // console.log('tweetUser', tweetUser);
    // try {
    //   await editUser(id, newFollowers);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // useEffect(() => {
  //   // if (!userId) {
  //   //   return;
  //   // }
  //   dispatch(editUser(user));
  // }, [dispatch, user]);

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   const editUsersInfo = async () => {
  //     try {
  //       await editUser(userId, newFollowers);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   editUsersInfo();
  // }, [newFollowers, userId]);

  const numFormat = Intl.NumberFormat('en-US');

  return (
    <Card>
      <Logo href="https://goit.global/ua/">
        <LogoImage src={logo} alt="logo" />
      </Logo>
      <Image src={background} alt="background" />
      <Line />
      <UserBox>
        <ImageBox>
          <Ellipse>
            <Avatar src={tweetUser.avatar} alt="avatar" width="62px" />
            {/* <img src={icon} alt="icon" /> */}
            {/* <svg width="80" height="80">
              <use href="../../images/symbol-defs.svg#icon-Ellipse-1-Stroke"></use>
            </svg> */}
            {/* <circle r="40px" fill="#EBD8FF" stroke="#EBD8FF" strokeWidth="8" /> */}
          </Ellipse>
        </ImageBox>
        <Titles>
          {/* <UserInfo>{tweetUser.user}</UserInfo> */}
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
