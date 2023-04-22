import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h2>Home page</h2>
      <Link to="/tweets">Tweets</Link>
    </main>
  );
};

export default Home;
