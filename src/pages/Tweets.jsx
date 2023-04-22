import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { TweetCard } from 'components/TweetCard/TweetCard';
import { TweetList } from 'components/TweetList/TweetList';
import { fetchUsers } from 'helpers/api';
import { LoadMoreButton } from 'components/TweetList/TweetList.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsersInfo = async () => {
      try {
        const results = await fetchUsers(currentPage);
        setUsers(prevUsers => [...prevUsers, ...results]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsersInfo();
  }, [currentPage]);

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
      <Link to={backLinkHref.current}>Go back</Link>
      <TweetList users={users} />
      {hasMorePages && (
        <LoadMoreButton type="button" onClick={handleLoad}>
          Load more
        </LoadMoreButton>
      )}
    </main>
  );
};

export default Tweets;
