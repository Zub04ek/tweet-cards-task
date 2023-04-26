import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TweetList } from 'components/TweetList/TweetList';
import {
  Header,
  LoadMoreButton,
  TweetLink,
} from 'components/TweetList/TweetList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetUsers } from 'redux/selectors';
import { fetchUsers } from 'redux/operations';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

const Tweets = () => {
  const users = useSelector(selectTweetUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [currentPage, dispatch]);

  const hasMorePages = useMemo(() => {
    const totalUsers = 12;
    const selectedUsers = users.length;
    return totalUsers > selectedUsers;
  }, [users]);

  const handleLoad = () => {
    setCurrentPage(page => page + 1);
  };

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/`);

  return (
    <main>
      <Header>
        <TweetLink to={backLinkHref.current}>Go back</TweetLink>
        <StatusFilter />
      </Header>
      <TweetList />
      {hasMorePages && users.length > 0 && (
        <LoadMoreButton type="button" onClick={handleLoad}>
          Load more
        </LoadMoreButton>
      )}
    </main>
  );
};

export default Tweets;
