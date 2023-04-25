import { TweetCard } from 'components/TweetCard/TweetCard';
import { List } from './TweetList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleTweets } from 'redux/selectors';

export const TweetList = () => {
  const tweetUsers = useSelector(selectVisibleTweets);
  // console.log('tweetUsers', tweetUsers);

  return (
    <>
      {tweetUsers.length > 0 && (
        <List>
          {tweetUsers.map(tweetUser => {
            // console.log('tweetUser.user', tweetUser.id);
            return (
              <li key={tweetUser.id}>
                <TweetCard tweetUser={tweetUser} />
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
