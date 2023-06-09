import { HomeContainer } from 'components/SharedLayout/SharedLayout.styled';
import { TweetLink } from 'components/TweetList/TweetList.styled';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Home page</h1>
      <TweetLink to="/tweets">Tweets</TweetLink>
    </HomeContainer>
  );
};

export default Home;
