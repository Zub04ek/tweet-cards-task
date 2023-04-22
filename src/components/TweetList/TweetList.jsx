import { TweetCard } from 'components/TweetCard/TweetCard';
import { List } from './TweetList.styled';

export const TweetList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <li key={user.id}>
          <TweetCard user={user} />
        </li>
      ))}
    </List>
  );
};
